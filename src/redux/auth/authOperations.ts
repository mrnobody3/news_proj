import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../../services/api/auth"
import { ILoginUser, IRegisterUser, IUser } from "../../types/user"
import { RootState } from "../store"

export const register = createAsyncThunk<
  void,
  IRegisterUser,
  { rejectValue: string }
>("auth/register", async (user, { rejectWithValue }) => {
  try {
    await registerUser(user)
    toast.success(`User ${user.name} registered successfully`)
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 409) {
      toast.error("Email in use")
      return rejectWithValue("Email in use")
    } else {
      toast.error("Oops, something went wrong")
      return rejectWithValue("Whoops!!! Something wrong")
    }
  }
})
export const login = createAsyncThunk<
  IUser,
  ILoginUser,
  { rejectValue: string }
>("auth/login", async (user, { rejectWithValue }) => {
  try {
    const data = await loginUser(user)
    toast("You have successfully logged into your account")
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      toast.error("Email or password invalid")
      return rejectWithValue("Email in use")
    } else {
      toast.error("Oops, something went wrong")
      return rejectWithValue("Whoops!!! Something wrong")
    }
  }
})

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logoutUser()
    } catch (e) {
      return rejectWithValue("Whoops!!! Something wrong")
    }
  },
)

export const current = createAsyncThunk<
  IUser,
  undefined,
  { rejectValue: string | undefined; state: RootState }
>("auth/current", async (_, { rejectWithValue, getState }) => {
  try {
    const { accessToken } = getState().auth
    if (!accessToken) {
      return rejectWithValue("Token is not valid")
    }

    const { user } = await getCurrentUser(accessToken)
    toast("You have successfully logged into your account")

    return user
  } catch (e) {
    return rejectWithValue("Whoops!!! Something wrong...")
  }
})

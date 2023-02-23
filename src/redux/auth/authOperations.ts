import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { loginUser, registerUser } from '../../services/api/auth'
import { ILoginUser, IRegisterUser, IUser } from '../../types/user'

export const register = createAsyncThunk<
  void,
  IRegisterUser,
  { rejectValue: string }
>('auth/register', async (user, { rejectWithValue }) => {
  try {
    await registerUser(user)
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 409) {
      return rejectWithValue('Email in use')
    } else {
      return rejectWithValue('Whoops!!! Something wrong')
    }
  }
})
export const login = createAsyncThunk<
  IUser,
  ILoginUser,
  { rejectValue: string }
>('auth/login', async (user, { rejectWithValue }) => {
  try {
    const { data } = await loginUser(user)
    return data.user
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 409) {
      return rejectWithValue('Email in use')
    } else {
      return rejectWithValue('Whoops!!! Something wrong')
    }
  }
})

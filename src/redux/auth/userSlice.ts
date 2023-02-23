import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isError } from '../../helpers/getError'
import { IUser } from '../../types/user'
import { login, register } from './authOperations'
interface UsersState {
  user: IUser
  token?: string | null
  isLoggedIn: boolean
  loading: boolean
  error?: string | null
}

const initialState = {
  user: {
    email: '',
    name: '',
    _id: '',
    avatarUrl: '',
  },
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
} as UsersState

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Register ---->
    builder.addCase(register.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(register.fulfilled, (state) => {
      state.loading = false
      state.error = null
    })

    // Login ---->
    builder.addCase(login.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log(payload)
      state.user._id = payload._id
      state.user.name = payload.name
      state.user.email = payload.email
      state.user.avatarUrl = payload.avatarUrl
      state.token = payload.token
      state.isLoggedIn = true
      state.loading = false
      state.error = null
    })

    // Catch errors ---->
    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.loading = false
    })
  },
})

export const authReducer = authSlice.reducer

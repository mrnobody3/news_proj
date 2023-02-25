import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isError } from '../../helpers/getError'
import { IUser } from '../../types/user'
import { current, login, logout, register } from './authOperations'
interface UsersState {
  user: IUser
  accessToken?: string | null
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
  accessToken: null,
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
      state.user._id = payload._id
      state.user.name = payload.name
      state.user.email = payload.email
      state.user.avatarUrl = payload.avatarUrl
      state.accessToken = payload.accessToken
      state.isLoggedIn = true
      state.loading = false
      state.error = null
    })

    // Logout ---->
    builder.addCase(logout.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false
      state.accessToken = ''
      state.user._id = ''
      state.user.email = ''
      state.user.name = ''
      state.user.avatarUrl = ''
      state.isLoggedIn = false
    })

    // ----> Get current

    builder.addCase(current.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(current.fulfilled, (state, { payload }) => {
      state.loading = false
      state.user.name = payload.name
      state.user.email = payload.email
      state.user._id = payload._id
      state.user.avatarUrl = payload.avatarUrl
      state.isLoggedIn = true
    })

    // Catch errors ---->
    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.loading = false
    })
  },
})

export const authReducer = authSlice.reducer

import { RootState } from "../store"

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn

export const selectErrorAuth = (state: RootState) => state.auth.error

export const selectUserData = (state: RootState) => state.auth.user

export const selectLoading = (state: RootState) => state.auth.loading

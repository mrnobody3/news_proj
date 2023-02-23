import { RootState } from '../store'

export const selectUserName = (state: RootState) => state.auth.user.name

export const selectToken = (state: RootState) => state.auth.token

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn

export const selectErrorAuth = (state: RootState) => state.auth.error

export const selectAvatarUser = (state: RootState) => state.auth.user.avatarUrl

export const selectUserData = (state: RootState) => state.auth.user

export const selectLoading = (state: RootState) => state.auth.loading

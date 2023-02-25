export interface IUser {
  email: string
  name: string
  _id?: string
  accessToken?: string | null
  avatarUrl?: string
}
export interface IRegisterUser {
  email: string
  name: string
  password: string
}
export interface ILoginUser {
  email: string
  password: string
}

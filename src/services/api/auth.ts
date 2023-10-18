import axios from "axios"
import { ILoginUser, IRegisterUser } from "../../types/user"

const instance = axios.create({
  baseURL: "https://api-express-017d.onrender.com/api",
})

const addToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

const removeToken = () => {
  instance.defaults.headers.common.Authorization = ""
}

export const registerUser = async (user: IRegisterUser) => {
  return await instance.post("/auth/register", user)
}

export const loginUser = async (user: ILoginUser) => {
  const { data } = await instance.post("/auth/login", user)
  addToken(data.accessToken)
  return data
}

export const getCurrentUser = async (accessToken: string) => {
  addToken(accessToken)
  try {
    const { data } = await instance.get("/auth/current")
    return data
  } catch (error) {
    removeToken()
    throw error
  }
}

export const logoutUser = async () => {
  const result = await instance.get("/auth/logout")
  removeToken()
  return result
}
export default instance

import axios from 'axios'
import { ILoginUser, IRegisterUser } from '../../types/user'
const instance = axios.create({
  baseURL: 'https://pet-api-ly5w.onrender.com/api/auth',
})

const addToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

const removeToken = () => {
  instance.defaults.headers.common.Authorization = ''
}

export const registerUser = async (user: IRegisterUser) => {
  return await instance.post('/register', user)
}

export const loginUser = async (user: ILoginUser) => {
  const { data } = await instance.post('/login', user)
  addToken(data.user.accessToken)
  return data
}

export const getCurrentUser = async (accessToken: string) => {
  addToken(accessToken)
  try {
    const { data } = await instance.get('/current')
    return data
  } catch (error) {
    removeToken()
    throw error
  }
}

export const logoutUser = async () => {
  const result = await instance.get('/logout')
  removeToken()
  return result
}

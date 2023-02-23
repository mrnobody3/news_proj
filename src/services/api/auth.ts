import axios from 'axios'
import { ILoginUser, IRegisterUser } from '../../types/user'
const instance = axios.create({
  baseURL: 'https://pet-api-ly5w.onrender.com/api/auth',
})

export const registerUser = async (user: IRegisterUser) => {
  return await instance.post('/register', user)
}

export const loginUser = async (user: ILoginUser) => {
  return await instance.post('/login', user)
}

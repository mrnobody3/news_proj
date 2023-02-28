import axios from "axios"

const { REACT_APP_NEWS_API = "https://jsonplaceholder.typicode.com" } =
  process.env

const instance = axios.create({
  baseURL: REACT_APP_NEWS_API,
})

export const getPosts = async (page = 1) => {
  return await instance.get("/posts", {
    params: {
      _page: page,
      limit: 10,
    },
  })
}

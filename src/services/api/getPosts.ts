import axios from "axios"

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})

export const getPosts = async (page = 1) => {
  return await instance.get("/posts", {
    params: {
      _page: page,
      limit: 10,
    },
  })
}

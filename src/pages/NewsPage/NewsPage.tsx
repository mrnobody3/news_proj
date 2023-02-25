import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../hooks/useReduxWithType"
import { selectLoading } from "../../redux/auth/authSelectors"
import { setLoader } from "../../redux/auth/userSlice"
import NewsList from "./NewsList"
import Section from "../../components/Section"
import { getPosts } from "../../services/api/getPosts"
import { IPost } from "../../types/post"

const NewsPage = () => {
  const [newsPosts, setNewsPosts] = useState<IPost[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const dispatch = useAppDispatch()
  const isLoading = useSelector(selectLoading)

  useEffect(() => {
    fetchNewsPosts()
  }, [page])

  const fetchNewsPosts = async () => {
    try {
      dispatch(setLoader(true))
      const response = await getPosts(page)
      setNewsPosts([...newsPosts, ...response.data])
      dispatch(setLoader(false))
      if (response.data.length === 0) {
        setHasMore(false)
      }
    } catch (error) {
      console.error(error)
      dispatch(setLoader(false))
    }
  }

  const handleLoadMoreClick = () => {
    setPage(page + 1)
  }

  const onRemove = (delId: number) => {
    setNewsPosts((prevState) => prevState.filter(({ id }) => id !== delId))
  }

  return (
    <Section title='Watch your fresh news'>
      <NewsList data={newsPosts} onRemove={onRemove} />
      {hasMore && (
        <Button
          variant='contained'
          color='primary'
          disabled={isLoading}
          onClick={handleLoadMoreClick}
          sx={{
            display: "block",
            marginLeft: "auto",
            marginTop: "20px",
          }}
        >
          {isLoading ? "Loading..." : "Load More"}
        </Button>
      )}
    </Section>
  )
}

export default NewsPage

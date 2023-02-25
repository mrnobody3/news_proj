import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NewsList from './NewsList'
import Section from '../../components/Section'
import { getPosts } from '../../services/api/getPosts'
import { IPost } from '../../types/post'

const NewsPage = () => {
  const [newsPosts, setNewsPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchNewsPosts()
  }, [page])

  const fetchNewsPosts = async () => {
    try {
      setIsLoading(true)
      const response = await getPosts(page)
      setNewsPosts([...newsPosts, ...response.data])
      setIsLoading(false)
      if (response.data.length === 0) {
        setHasMore(false)
      }
    } catch (error) {
      console.error(error)
      setIsLoading(false)
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
            display: 'block',
            marginLeft: 'auto',
            marginTop: '20px',
          }}
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </Section>
  )
}

export default NewsPage

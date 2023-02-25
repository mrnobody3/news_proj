import { Box, Grid } from "@mui/material"
import React from "react"
import { IPost } from "../../../types/post"
import NewsItem from "./NewsItem"

interface INewsList {
  data: IPost[]
  onRemove: (delId: number) => void
}
const NewsList: React.FC<INewsList> = ({ data, onRemove }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: "12px",
        justifyContent: "center",
        gridTemplateColumns: { md: "1fr 1fr", lg: "1fr 1fr 1fr" },
        minHeight: "400px",
      }}
    >
      {data.map((post: IPost) => (
        <Grid item xs={12} sm={6} md={4} key={post.title}>
          <NewsItem
            id={post.id}
            title={post.title}
            description={post.body}
            onRemove={onRemove}
          />
        </Grid>
      ))}
    </Box>
  )
}

export default NewsList

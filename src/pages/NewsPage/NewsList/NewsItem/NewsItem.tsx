import { Card, CardContent, IconButton, Typography } from "@mui/material"
import ClearIcon from "@mui/icons-material/Clear"
import React from "react"

interface INewsItem {
  title: string
  description: string
  onRemove: (delId: number) => void
  id: number
}

const NewsItem: React.FC<INewsItem> = ({
  title,
  description,
  onRemove,
  id,
}) => {
  return (
    <Card
      sx={{
        bgcolor: "#e3f6f5",
        maxWidth: 600,
        minHeight: "340px",
        position: "relative",
        padding: "10px",
      }}
    >
      <CardContent>
        <Typography
          variant='h2'
          sx={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: (theme) => theme.spacing(2),
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: 18 }} variant='body1'>
          {description}
        </Typography>
      </CardContent>
      <IconButton
        onClick={() => onRemove(id)}
        aria-label='delete'
        sx={{
          position: "absolute",
          top: "2px",
          right: "2px",
        }}
      >
        <ClearIcon />
      </IconButton>
    </Card>
  )
}

export default NewsItem

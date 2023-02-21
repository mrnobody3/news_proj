import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

interface INewsItem {
  title: string
  description: string
}

const NewsItem: React.FC<INewsItem> = ({ title, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        minHeight: '300px',
      }}
    >
      <CardContent>
        <Typography
          variant='h2'
          sx={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: (theme) => theme.spacing(2),
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: 18 }} variant='body1'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NewsItem

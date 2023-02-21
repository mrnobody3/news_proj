import { Container, Typography } from '@mui/material'
import React, { ReactNode } from 'react'
import { SectionStyled } from './Section.styled'
interface ISection {
  children: ReactNode
  title?: string
}
const Section: React.FC<ISection> = ({ children, title }) => {
  return (
    <SectionStyled>
      <Container>
        {title && (
          <Typography
            variant='h2'
            sx={{ marginBottom: '20px', textAlign: 'center' }}
          >
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </SectionStyled>
  )
}

export default Section

import { Container } from '@mui/material'
import React, { ReactNode } from 'react'
import { SectionStyled } from './Section.styled'
interface ISection {
  children: ReactNode
}
const Section: React.FC<ISection> = ({ children }) => {
  return (
    <SectionStyled>
      <Container>{children}</Container>
    </SectionStyled>
  )
}

export default Section

// import styled from 'styled-components'
import { styled } from '@mui/system'
import { theme } from '../../../styles/theme'
export const TitleStyled = styled('h1')({
  fontSize: '4rem',
  fontWeight: 600,

  textShadow:
    '3px 0px 7px rgba(211,211,211,0.8), -3px 0px 7px rgba(211,211,211,0.8), 0px 4px 7px rgba(211,211,211,0.8)',

  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
})
export const SubTitleStyled = styled('p')({
  ontSize: '1.5rem',
  fontWeight: 400,
  textShadow:
    '3px 0px 7px rgba(81,67,21,0.8), -3px 0px 7px rgba(81,67,21,0.8), 0px 4px 7px rgba(81,67,21,0.8)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
})

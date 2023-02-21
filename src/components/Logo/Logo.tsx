import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import React from 'react'
import { Link } from 'react-router-dom'
interface StyleObject {
  [key: string]: string | number
}
interface ILogo {
  style?: StyleObject
}
const Logo: React.FC<ILogo> = ({ style }) => {
  return (
    <Link to='/' style={style}>
      <WorkHistoryIcon sx={{ width: '40px', height: '40px' }} />
    </Link>
  )
}

export default Logo

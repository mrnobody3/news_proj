import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as NewsIcon } from "../../assets/icons/shared/news.svg"

interface StyleObject {
  [key: string]: string | number
}
interface ILogo {
  style?: StyleObject
}
const Logo: React.FC<ILogo> = ({ style }) => {
  return (
    <Link to='/' style={style}>
      <NewsIcon width='40px' height='40' />
    </Link>
  )
}

export default Logo

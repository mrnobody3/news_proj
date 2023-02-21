import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import MobileNavBar from './MobileNavBar'
import NavBar from '../NavBar'

const navItems = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'News',
    path: '/news',
  },
]
const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }
  return (
    <Box component='header' sx={{ display: 'flex', alignItems: 'center' }}>
      <CssBaseline />
      <NavBar handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
      <MobileNavBar
        mobileOpen={mobileOpen}
        navItems={navItems}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Box>
  )
}

export default Header

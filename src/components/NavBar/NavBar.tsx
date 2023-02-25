import { Container } from "@mui/material"
import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"

import IconButton from "@mui/material/IconButton"

import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import { NavLink } from "react-router-dom"
import UserMenu from "../Header/UserMenu"
import LanguageSelector from "../LanguageSelector"
import Logo from "../Logo"

interface Item {
  id: number
  name: string
  path: string
}
interface INavBar {
  handleDrawerToggle: () => void
  navItems: Item[]
}
const NavBar: React.FC<INavBar> = ({ handleDrawerToggle, navItems }) => {
  return (
    <AppBar component='nav'>
      <Toolbar sx={{ bgcolor: "#272343" }}>
        <Container sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Logo style={{ marginRight: "40px" }} />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { sm: "40px" },
            }}
          >
            {navItems.map((item) => (
              <NavLink
                to={item.path}
                key={item.id}
                style={{
                  color: "white",
                  fontWeight: "500",
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </Box>
          <LanguageSelector />
          <UserMenu />
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

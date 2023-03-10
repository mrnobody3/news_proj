import MenuIcon from "@mui/icons-material/Menu"
import { Container } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"

import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import * as React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectLoading } from "../../redux/auth/authSelectors"
import UserMenu from "../Header/UserMenu"
import LanguageSelector from "../LanguageSelector"
import LinearLoader from "../LinearLoader"
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
  const isLoading = useSelector(selectLoading)
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
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { sm: "40px" },
              alignItems: "center",
            }}
          >
            <Logo style={{ marginRight: "40px" }} />
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
      {isLoading && <LinearLoader />}
    </AppBar>
  )
}

export default NavBar

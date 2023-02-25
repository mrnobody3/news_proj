import React from "react"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import { NavLink } from "react-router-dom"
import Logo from "../../Logo"

interface Item {
  id: number
  name: string
  path: string
}
interface IMobileNavBar {
  mobileOpen: boolean
  handleDrawerToggle: () => void
  navItems: Item[]
}

const MobileNavBar: React.FC<IMobileNavBar> = ({
  handleDrawerToggle,
  navItems,
  mobileOpen,
}) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Logo />
      <Divider />
      <List
        sx={{
          padding: "35px",
          display: "flex",
          gap: "30px",
          flexDirection: "column",
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <NavLink style={{ fontWeight: "500" }} to={item.path}>
              {item.name}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  )
  return (
    <Box component='nav'>
      <Drawer
        // container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default MobileNavBar

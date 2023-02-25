import { Box } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import React from "react"
import { useTranslation } from "react-i18next"
import MobileNavBar from "./MobileNavBar"
import NavBar from "../NavBar"

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { t } = useTranslation()
  const navItems = [
    {
      id: 1,
      name: `${t("header.nav.home")}`,
      path: "/",
    },
    {
      id: 2,
      name: `${t("header.nav.news")}`,
      path: "/news",
    },
  ]
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }
  return (
    <Box component='header' sx={{ display: "flex", alignItems: "center" }}>
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

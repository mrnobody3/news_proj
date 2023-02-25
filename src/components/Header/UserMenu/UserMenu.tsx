import { Avatar, Box, Button } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import React from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../../hooks/useReduxWithType"
import { logout } from "../../../redux/auth/authOperations"
import {
  selectIsLoggedIn,
  selectUserData,
} from "../../../redux/auth/authSelectors"

const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const user = useSelector(selectUserData)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {isLoggedIn ? (
        <>
          <Link
            to='/profile'
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            <Avatar
              sx={{ marginRight: "10px" }}
              alt={"name"}
              src={user.avatarUrl}
            />
            {user.name}
          </Link>
          <Button
            onClick={() => dispatch(logout())}
            endIcon={
              <LogoutIcon
                color='primary'
                sx={{
                  width: "25px",
                  height: "25px",
                }}
              />
            }
          />
        </>
      ) : (
        <>
          <Button variant='contained' color='primary'>
            <Link to='/login'>{t("btn.login")}</Link>
          </Button>
          <Button variant='contained' color='secondary'>
            <Link to='/register'>{t("btn.register")}</Link>
          </Button>
        </>
      )}
    </Box>
  )
}

export default UserMenu

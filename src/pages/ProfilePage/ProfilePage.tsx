import { Box } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import React from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import Section from "../../components/Section"
import { useAppDispatch } from "../../hooks/useReduxWithType"
import { logout } from "../../redux/auth/authOperations"
import { selectUserData } from "../../redux/auth/authSelectors"

const ProfilePage = () => {
  const user = useSelector(selectUserData)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  return (
    <Section>
      <Box
        component='div'
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Grid item xs={12} sm={4}>
          <Avatar
            sx={{
              width: "150px",
              height: "150px",
              marginRight: "20px",
            }}
            src={user.avatarUrl}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper sx={{ padding: "20px" }}>
            <Typography variant='h4' sx={{ marginBottom: "20px" }}>
              {user.name}
            </Typography>
            <Typography variant='subtitle1' sx={{ marginBottom: "20px" }}>
              Email: {user.email}
            </Typography>
            {/* <Typography variant='subtitle1'>Phone: 123-456-7890</Typography> */}
            {/* <Button variant='contained' color='primary'> */}
            {/* Edit Profile */}
            {/* </Button> */}
            <Button
              type='button'
              variant='contained'
              color='secondary'
              onClick={() => dispatch(logout())}
            >
              {t("btn.logout")}
            </Button>
          </Paper>
        </Grid>
      </Box>
    </Section>
  )
}

export default ProfilePage

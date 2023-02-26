import { Box, Button, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import React from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { useAppDispatch } from "../../../hooks/useReduxWithType"
import { login } from "../../../redux/auth/authOperations"
import { selectLoading } from "../../../redux/auth/authSelectors"
import { validationSchema } from "./loginSchema"

interface FormValues {
  email: string
  password: string
}

const initialValues: FormValues = {
  email: "",
  password: "",
}

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(selectLoading)
  const { t } = useTranslation()

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema(t),
    onSubmit: async (values) => {
      dispatch(login(values))
    },
  })

  return (
    <Box
      component='form'
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: { xs: "100%", sm: "608px" },
        margin: "0 auto",
        padding: "20px",
      }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        id='email'
        label='Email'
        variant='outlined'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id='password'
        label='Password'
        type='password'
        variant='outlined'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <Button type='submit' variant='contained' disabled={isLoading}>
        {t("btn.login")}
      </Button>
      <Typography align='center' variant='h5' mt={2}>
        {t("loginpage.desk")}{" "}
        <Link style={{ color: "#272343", fontWeight: 700 }} to={"/register"}>
          {t("btn.register")}
        </Link>
      </Typography>
    </Box>
  )
}

export default LoginForm

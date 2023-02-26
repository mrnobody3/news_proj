import { Box, Button, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import React from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { useAppDispatch } from "../../../hooks/useReduxWithType"
import { register } from "../../../redux/auth/authOperations"
import {
  selectErrorAuth,
  selectLoading,
} from "../../../redux/auth/authSelectors"
import { validationSchema } from "./registerSchema"

interface FormValues {
  name: string
  email: string
  password: string
  // confirmPassword: string
}

const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
  // confirmPassword: '',
}

const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(selectLoading)
  const error = useSelector(selectErrorAuth)
  const { t } = useTranslation()

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema(t),
    onSubmit: async (values) => {
      dispatch(register(values))
      !error && (await formik.resetForm())
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
        id='name'
        label='Name'
        variant='outlined'
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
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
      {/* <TextField */}
      {/*  id='confirmPassword' */}
      {/*  label='Confirm Password' */}
      {/*  type='password' */}
      {/*  variant='outlined' */}
      {/*  value={formik.values.confirmPassword} */}
      {/*  onChange={formik.handleChange} */}
      {/*  onBlur={formik.handleBlur} */}
      {/*  error={ */}
      {/*    formik.touched.confirmPassword && */}
      {/*    Boolean(formik.errors.confirmPassword) */}
      {/*  } */}
      {/*  helperText={ */}
      {/*    formik.touched.confirmPassword && formik.errors.confirmPassword */}
      {/*  } */}
      {/* /> */}

      <Button type='submit' variant='contained' disabled={isLoading}>
        Register
      </Button>
      <Typography align='center' variant='h5' mt={2}>
        Do you have an account?{" "}
        <Link style={{ color: "#272343", fontWeight: 700 }} to={"/login"}>
          Sign in
        </Link>
      </Typography>
    </Box>
  )
}

export default RegisterForm

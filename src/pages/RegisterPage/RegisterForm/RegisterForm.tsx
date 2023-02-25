import React from "react"
import { TextField, Button, Box } from "@mui/material"
import { useFormik } from "formik"
import { useSelector } from "react-redux"
import * as yup from "yup"
import { useAppDispatch } from "../../../hooks/useReduxWithType"
import { register } from "../../../redux/auth/authOperations"
import { selectLoading } from "../../../redux/auth/authSelectors"

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters"),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'Passwords must match')
  //   .required('Confirm Password is required'),
})

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
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      dispatch(register(values))
      formik.resetForm()
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
    </Box>
  )
}

export default RegisterForm

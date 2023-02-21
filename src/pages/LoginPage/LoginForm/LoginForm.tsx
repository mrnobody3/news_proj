import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
})

interface FormValues {
  email: string
  password: string
}

const initialValues: FormValues = {
  email: '',
  password: '',
}

const LoginForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true)
      // Submit the form data to the server here
      console.log('Form values:', values)
      setIsSubmitting(false)
    },
  })

  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '608px',
        margin: '0 auto',
        padding: '20px',
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
      <Button type='submit' variant='contained' disabled={isSubmitting}>
        Login
      </Button>
    </Box>
  )
}

export default LoginForm

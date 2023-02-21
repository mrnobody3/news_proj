import { Avatar, Box, Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserMenu = () => {
  // Temp
  const [user] = useState(true)

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        marginLeft: 'auto',
        alignItems: 'center',
      }}
    >
      {user ? (
        <>
          <Link
            to='/profile'
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <Avatar
              sx={{ marginRight: '10px' }}
              alt={'name'}
              src='https://picsum.photos/200'
            />
            User
          </Link>
          <Button
            endIcon={
              <LogoutIcon
                color='primary'
                sx={{
                  width: '25px',
                  height: '25px',
                }}
              />
            }
          />
        </>
      ) : (
        <>
          <Button variant='contained' color='primary'>
            Login
          </Button>
          <Button variant='contained' color='secondary'>
            Register
          </Button>
        </>
      )}
    </Box>
  )
}

export default UserMenu

import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Section from '../../components/Section'

const ProfilePage = () => {
  return (
    <Section>
      <Grid
        component='div'
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Grid item xs={12} sm={4}>
          <Avatar
            sx={{
              width: '150px',
              height: '150px',
              marginRight: '20px',
            }}
            src='https://picsum.photos/200'
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant='h4'>John Doe</Typography>
            <Typography variant='subtitle1'>
              Email: john.doe@example.com
            </Typography>
            <Typography variant='subtitle1'>Phone: 123-456-7890</Typography>
            <Button variant='contained' color='primary'>
              Edit Profile
            </Button>
            <Button variant='contained' color='secondary'>
              Logout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Section>
  )
}

export default ProfilePage

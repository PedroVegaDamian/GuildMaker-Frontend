import {
  Avatar,
  Box,
  Button,
  lighten,
  Paper,
  Stack,
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'

const Members = () => {
  return (
    <>
      <Typography variant={'h4'} component={'h1'} mb={1}>
        Miembros
      </Typography>
      <Typography variant={'body1'} mb={3}>
        Vizualiza a todos los miembros registrados de tu organización
      </Typography>

      <Button
        sx={{ mb: 3 }}
        to={'registrar'}
        component={Link}
        variant={'contained'}
        autoCapitalize={'characters'}
      >
        Registrar miembros
      </Button>

      <Box
        p={2}
        height={400}
        display={'flex'}
        borderRadius={1}
        border={'1px solid'}
        alignItems={'start'}
        bgcolor={theme => lighten(theme.palette.background.default, 0.1)}
      >
        <Paper elevation={1} sx={{ py: 1, px: 2, cursor: 'pointer' }}>
          <Stack columnGap={2} flexDirection={'row'} alignItems={'center'}>
            <Avatar sx={{ bgcolor: 'white' }}>JD</Avatar>
            <Box>
              <Typography>Jhon Doe</Typography>
              <Typography
                component={'p'}
                variant={'caption'}
                color={'textSecondary'}
              >
                Encargado de algo
              </Typography>
              <Typography
                component={'p'}
                variant={'caption'}
                color={'textSecondary'}
              >
                ID: 123456
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </>
  )
}

export default Members

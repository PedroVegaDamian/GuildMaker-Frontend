import { Box, Grid2, Typography } from '@mui/material'

const Home = () => {
  return (
    <>
      <Typography variant={'h4'} component={'h1'} mb={1}>
        Bienvenido Jhon Doe!
      </Typography>
      <Typography variant={'body1'} mb={2}>
        <Typography component={'span'} fontWeight={500}>
          cargo:
        </Typography>{' '}
        encargado de una cosa, u otra cosa entre otra
      </Typography>

      <Grid2 container spacing={2}>
        <Grid2 container size={4}>
          <Grid2 size={12}>
            <Box width={'100%'} height={'100%'} border={'1px solid'}>
              Perfil
            </Box>
          </Grid2>
          <Grid2 size={12}>
            <Box width={'100%'} height={'100%'} border={'1px solid'}>
              Grupos
            </Box>
          </Grid2>
        </Grid2>

        <Grid2 size={4}>
          <Box width={'100%'} height={'400px'} border={'1px solid'}>
            Tareas
          </Box>
        </Grid2>

        <Grid2 size={4}>
          <Box width={'100%'} height={'400px'} border={'1px solid'}>
            Miembros
          </Box>
        </Grid2>

        <Grid2 size={12}>
          <Box width={'100%'} height={'400px'} border={'1px solid'}>
            Calendario
          </Box>
        </Grid2>
      </Grid2>
    </>
  )
}

export default Home

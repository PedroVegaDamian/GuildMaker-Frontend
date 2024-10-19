import { Box, Button, TextField, Typography } from '@mui/material'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(Object.fromEntries(formData))
    navigate('/dashboard')
  }
  return (
    <Box mt={10}>
      <Typography
        mb={2}
        variant={'h5'}
        component={'h1'}
        align={'center'}
        color={'primary'}
        fontWeight={'bold'}
      >
        Iniciar Sesión
      </Typography>
      <Box
        gap={2}
        mx={'auto'}
        maxWidth={400}
        display={'grid'}
        component={'form'}
        onSubmit={handleSubmit}
      >
        <TextField
          name={'email'}
          type={'email'}
          label={'Correo'}
          variant={'outlined'}
        />
        <TextField
          name={'password'}
          type={'password'}
          label={'Contraseña'}
          variant={'outlined'}
        />
        <Button variant={'contained'} type={'submit'}>
          Iniciar
        </Button>
      </Box>
    </Box>
  )
}

export default Login

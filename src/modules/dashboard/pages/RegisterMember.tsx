import { FormEvent } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'

const RegisterMember = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(Object.fromEntries(formData))
  }

  return (
    <>
      <Typography variant={'h4'} component={'h1'} mb={1}>
        Miembros
      </Typography>
      <Typography variant={'body1'} mb={3}>
        Vizualiza a todos los miembros registrados de tu organización
      </Typography>

      <Box component={'form'} onSubmit={handleSubmit}>
        <Box
          mb={3}
          gap={2}
          maxWidth={400}
          display={'flex'}
          flexDirection={'column'}
        >
          <TextField
            name={'name'}
            type={'text'}
            label={'Nombres'}
            variant={'outlined'}
          />
          <TextField
            type={'text'}
            name={'lastName'}
            label={'Apellidos'}
            variant={'outlined'}
          />
          <TextField
            type={'email'}
            name={'email'}
            label={'Correo'}
            variant={'outlined'}
          />
          <TextField
            type={'text'}
            name={'address'}
            label={'Dirección'}
            variant={'outlined'}
          />
          <TextField
            type={'text'}
            name={'phone'}
            label={'Teléfono'}
            variant={'outlined'}
          />
          <TextField
            type={'text'}
            name={'group'}
            label={'Grupo'}
            variant={'outlined'}
          />
          <TextField
            name={'dni'}
            type={'text'}
            label={'DNI'}
            variant={'outlined'}
          />
          <TextField
            type={'text'}
            name={'nationality'}
            variant={'outlined'}
            label={'Nacionalidad'}
          />
          <TextField
            name={'password'}
            type={'password'}
            label={'Contraseña'}
            variant={'outlined'}
          />
        </Box>

        <Button variant={'contained'} type={'submit'}>
          Agregar Miembro
        </Button>
      </Box>
    </>
  )
}

export default RegisterMember

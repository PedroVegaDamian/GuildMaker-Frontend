import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff00ff'
    }
  }
})

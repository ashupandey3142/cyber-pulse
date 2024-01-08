import { ThemeProvider, Typography } from '@mui/material'
import './App.css'
import theme from './theme/index'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4">Google Single Sign In</Typography>
    </ThemeProvider>
  )
}

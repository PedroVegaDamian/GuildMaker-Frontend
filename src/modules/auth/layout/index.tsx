import { Container } from '@mui/material'

interface Props {
  children: React.ReactNode
}

export const AuthLayout = ({ children }: Props) => {
  return <Container>{children}</Container>
}

import { Sidebar } from '@/modules/dashboard/components/Sidebar'
import { Box, Container } from '@mui/material'

interface Props {
  children: React.ReactNode
}

export const DashboardLayout = ({ children }: Props) => {
  return (
    <Box display={'flex'}>
      <Sidebar />
      <Box component={'main'} width={'100%'}>
        <Container sx={{ minHeight: '100vh', py: 2 }}>{children}</Container>
      </Box>
    </Box>
  )
}

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import {
  AccountCircle,
  Dashboard,
  Groups,
  ListAlt,
  Person,
  Settings
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const drawerWidth = 240

const links = [
  { label: 'Dashboard', icon: Dashboard, path: '' },
  { label: 'Perfil', icon: AccountCircle, path: 'perfil' },
  { label: 'Grupos', icon: Groups, path: 'grupos' },
  { label: 'Tareas', icon: ListAlt, path: 'tareas' },
  { label: 'Miembros', icon: Person, path: 'miembros' },
  { label: 'Configuración', icon: Settings, path: 'configuracion' }
]

export const Sidebar = () => {
  return (
    <Drawer
      anchor={'left'}
      variant={'permanent'}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
    >
      <Typography variant={'h5'} fontWeight={500} align={'center'} my={2}>
        GuildMaker
      </Typography>
      <Divider />
      <List>
        {links.map(link => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton component={Link} to={link.path}>
              <ListItemIcon>
                <link.icon color={'primary'} />
              </ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

import { type Articles } from '../type'
import Skeleton from '@mui/material/Skeleton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

type SidebarProps = {
  articles: Articles
}

export default function Sidebar({ articles }: SidebarProps) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <Box sx={{ paddingInline: 1 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ paddingInline: 1 }}>
              <ListItemIcon>
                <Skeleton
                  variant='circular'
                  width={40}
                  height={40}
                  animation={false}
                />
              </ListItemIcon>
              <ListItemText primary='User Name' />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          {articles && articles.map((article, index) => (
            <ListItem key={`${article.title}-${index}`} disablePadding>
              <ListItemButton sx={{ paddingInline: 1 }}>
                <ListItemIcon sx={{ minWidth: '34px' }}>
                  {index % 2 === 0 ? (
                    <InboxIcon sx={{ fontSize: '1.3rem' }} />
                  ) : (
                    <MailIcon sx={{ fontSize: '1.3rem' }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={article.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
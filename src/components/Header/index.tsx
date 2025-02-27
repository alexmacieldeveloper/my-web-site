"use client"
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { css } from '@emotion/react';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    name: 'Qualificações',     
    href: '#qualifications'
  },
  {
    name: 'Projetos',
    href: '#projects' 
  },
  {
    name: 'Contatos',
    href: '#contacs'
  }
];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', color: 'primary.light' }} bgcolor='primary.dark'>
      <List>
        {navItems.map((item, index) => (
          <ListItem disablePadding key={item.name} sx={{ margin: 'auto', width: '80%'}}>
            <ListItemButton sx={{ textAlign: 'center',
              ":hover": {
                backgroundColor: 'rgba(35, 85, 88, 0.5)',
                border: '1px solid rgba(35, 85, 88, 1)'
              }
            }} href={item.href}>
              <ListItemText  primary={item.name}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', bgcolor: 'primary.dark' }}>
      <CssBaseline />
      <AppBar sx={{ bgcolor: 'primary.dark', boxShadow: 'none'}}>
        <Toolbar>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { sm: 'block'  }, fontSize: { sm: '20px', lg: '32px'}, lineHeight: 'normal', letterSpacing: { sm: '3.2px', lg: '5.12px'} }}
            >
                ÁLEX MACIEL
            </Typography>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
 
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                <Button variant="outlined" key={item.name} sx={{ fontSize: '18px', color: '#FDFDFD', lineHeight: 'normal', margin: '0 10px', border: 'none',
                  ":hover": {
                      backgroundColor: 'rgba(35, 85, 88, 0.5)',
                      border: '1px solid rgba(35, 85, 88, 1)'
                  }
                }} href={item.href}>
                    {item.name}
                </Button>
                ))}
            </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width:'100%', marginTop: '50px' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
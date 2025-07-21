import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Chip,
  Typography,
  Box,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  MusicNote as MusicNoteIcon,
  LibraryMusic as LibraryMusicIcon,
  Description as DescriptionIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    {
      title: t('Home'),
      description: t('Main piano practice interface'),
      path: '/',
      icon: <HomeIcon />,
      status: 'ok'
    },
    {
      title: t('Test Notes'),
      description: t('Sequential note testing interface'),
      path: '/test-notes',
      icon: <MusicNoteIcon />,
      status: 'in-progress'
    },
    {
      title: t('Chords'),
      description: t('Chord practice and learning'),
      path: '/chords',
      icon: <LibraryMusicIcon />,
      status: 'experimental'
    },
    {
      title: t('Changelog'),
      description: t('Version history and updates'),
      path: `/${i18n.language}/changelog`,
      icon: <DescriptionIcon />,
      status: 'ok'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'ok':
        return 'success';
      case 'in-progress':
        return 'warning';
      case 'experimental':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'ok':
        return t('Ready');
      case 'in-progress':
        return t('In Progress');
      case 'experimental':
        return t('Experimental');
      default:
        return status;
    }
  };

  const handleItemClick = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { width: 320 }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="div" gutterBottom>
            {t('Navigation Menu')}
          </Typography>
        </Box>
        
        <Divider />
        
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleItemClick(item.path)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="subtitle1">
                        {item.title}
                      </Typography>
                      <Chip
                        label={getStatusText(item.status)}
                        color={getStatusColor(item.status)}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                  }
                  secondary={item.description}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
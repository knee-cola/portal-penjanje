import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = ({handleDrawerToggle}) => {    
    return(
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Penjački portal
            </Typography>
          </Toolbar>
        </AppBar>
    )
}
export default NavBar;

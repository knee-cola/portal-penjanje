import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, Typography, Icon } from '@material-ui/core';

const NavBar = ({handleDrawerToggle}) => {    
    return(
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerToggle}
            >
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Penjački portal
            </Typography>
          </Toolbar>
        </AppBar>
    )
}
export default NavBar;

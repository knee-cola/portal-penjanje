import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, Typography, Icon } from '@material-ui/core';
import withRouter from 'react-router-dom/withRouter';

const NavBar = ({handleDrawerToggle, location:{pathname}}) => {

  // resetiram scroll poziciju
  window.scrollTo(0, 0);

  let title;

  switch(pathname) {
    case "/":
      title = "Zadnje penjano";
      break;
    //case "/usponi/":
    //  title = "Zadnje penjano";
    //  break;
    case "/smjerovi/":
      title = "Smjerovi";
      break;
    case "/moji-usponi/":
      title = "Moji usponi";
      break;
    case "/novi-uspon/":
      title = "Novi uspon";
      break;
    case "/novi-smjer/":
      title = "Novi smjer";
      break;
    case "/moji-partneri/":
      title = "Moji partneri";
      break;
    default:
      title = "Penjanje";
  }

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
            <Typography variant="h6" color="inherit" noWrap onClick={handleDrawerToggle} style={{cursor:'pointer'}}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
    )
}
export default withRouter(NavBar);

import React from 'react';
import { AppDrawer } from "./AppDrawer";
import { List, ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const AppMenu = ({handleDrawerToggle, menuOpen}) =>
<AppDrawer handleDrawerToggle={handleDrawerToggle} menuOpen={menuOpen}>
    <List>
      {[
        {label: 'Zadnje penjano', url:'/', icon:'view_carousel'},
        {label: 'Smjerovi', url:'/smjerovi/', icon:'explore'},
        {label: 'Moji usponi', url:'/moji-usponi/', icon:'chrome_reader_mode'},
        {label: 'Moji partneri', url:'/moji-partneri/', icon:'people'},
      ].map(({label, url, icon}) => (
          <ListItem button key={label} component={Link} to={url} onClick={handleDrawerToggle} >
            <ListItemIcon><Icon>{icon}</Icon></ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
      ))}
    </List>
</AppDrawer>;
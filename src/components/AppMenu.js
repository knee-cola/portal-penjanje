import React from 'react';
import { AppDrawer } from "./AppDrawer";
import { List, ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';

export const AppMenu = ({handleDrawerToggle, menuOpen}) =>
<AppDrawer handleDrawerToggle={handleDrawerToggle} menuOpen={menuOpen}>
    <List>
      {[
        {label: 'Zadnje penjano', icon:'view_carousel'},
        {label: 'Smjerovi', icon:'explore'},
        {label: 'Moji usponi', icon:'chrome_reader_mode'},
        {label: 'Moji partneri', icon:'people'},
      ].map(({label, icon}) => (
        <ListItem button key={label}>
          <ListItemIcon><Icon>{icon}</Icon></ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
</AppDrawer>;
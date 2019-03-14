import React from 'react';
import { AppDrawer } from "./AppDrawer";
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';

export const AppMenu = ({handleDrawerToggle, menuOpen}) =>
<AppDrawer handleDrawerToggle={handleDrawerToggle} menuOpen={menuOpen}>
    <List>
      {['Zadnje penjano', 'Smjerovi', 'Moji usponi', 'Moji partneri'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
</AppDrawer>;
import React from 'react';
import { Drawer } from '@material-ui/core';

export const AppDrawer = ({menuOpen, handleDrawerToggle, children }) => 
<nav>
    <Drawer
        open={menuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
        }}
    >
        {children}
    </Drawer>
</nav>;
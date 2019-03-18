import React, { Fragment } from 'react';
import { Fab, Icon, withStyles, Menu, MenuItem } from '@material-ui/core';

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: 20,
        right: 20
    },
  });

const AddButton = ({history, classes}) => {
    const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

    function handleClick(event) {
        setMenuAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setMenuAnchorEl(null);
    }

    function noviUsponOnClick() {
        history.push('/novi-uspon/')
    }
    
    return(
        <Fragment>
            <Fab color="primary" aria-label="Add" className={classes.fab} onClick={handleClick}>
                <Icon>add</Icon>
            </Fab>
            <Menu id="simple-menu" anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleClose}>
                <MenuItem onClick={noviUsponOnClick}>Novi uspon</MenuItem>
                <MenuItem onClick={handleClose}>Novi smjer</MenuItem>
            </Menu>
        </Fragment>);
};

export default withStyles(styles)(AddButton);
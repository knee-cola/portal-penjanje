import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Icon, Menu, MenuItem, Avatar, ListItemAvatar, ListItem, ListItemText, Divider } from '@material-ui/core';
import defaultAvatar from '../img/baseline-person-24px.svg';

const styles = {
  card: {
    margin: '.7em'
  }
};

function SmjerCard(props) {
  
  const { partner: { ime, prezime, nick, avatar } } = props;
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  function handleClick(event) {
    setMenuAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setMenuAnchorEl(null);
  }

  return (
    <Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={avatar || defaultAvatar} />
        </ListItemAvatar>
        <ListItemText
          primary={`${ime} ${prezime}`}
          secondary={`@${nick}`}
        />
        <IconButton onClick={handleClick}>
          <Icon>more_vert</Icon>
        </IconButton>
      </ListItem>
      <Menu id="simple-menu" anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Info o partneru</MenuItem>
      </Menu>
      <Divider />
    </Fragment>
  );
}


export default withStyles(styles)( SmjerCard ) ;
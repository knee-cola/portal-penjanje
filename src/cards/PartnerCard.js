import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardHeader, IconButton, Icon, Menu, MenuItem, Avatar } from '@material-ui/core';
import defaultAvatar from '../img/baseline-person-24px.svg';

const styles = {
  card: {
    maxWidth: 400,
    width: '100vw',
    margin: '.7em'
  }
};

function SmjerCard(props) {
  
  const { classes, partner: { ime, prezime, nick, avatar } } = props;

  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  function handleClick(event) {
    setMenuAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setMenuAnchorEl(null);
  }

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} src={avatar || defaultAvatar}>
              R
            </Avatar>
          }
          action={
            <IconButton onClick={handleClick}>
              <Icon>more_vert</Icon>
            </IconButton>
          }
          title={`${ime} ${prezime}`}
          subheader={`@${nick}`}
        />
      </Card>
      <Menu id="simple-menu" anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Info o partneru</MenuItem>
      </Menu>
    </Fragment>
  );
}


export default withStyles(styles)( SmjerCard ) ;
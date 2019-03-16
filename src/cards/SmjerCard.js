import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader, IconButton, Icon, Menu, MenuItem } from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 400,
    margin: '1em'
  },
  media: {
    borderTop: '1px solid #cccccc',
    height: 0,
    paddingTop: '56.25%', // 16:9
    cursor: 'pointer'
  },
};

function SmjerCard(props) {
  
  const { classes, smjer:{ imeSmjera, ocjenaSmjera, lokacijaSmjera, thumb } } = props;

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
          action={
            <IconButton onClick={handleClick}>
              <Icon>more_vert</Icon>
            </IconButton>
          }
          title={`${imeSmjera}, ${ocjenaSmjera}`}
          subheader={lokacijaSmjera}
        />
        <CardMedia
          className={classes.media}
          image={thumb}
        />
      </Card>
      <Menu id="simple-menu" anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Info o smjeru</MenuItem>
        <MenuItem onClick={handleClose}>Zabilježi uspon</MenuItem>
      </Menu>
    </Fragment>
  );
}


export default withStyles(styles)( SmjerCard ) ;
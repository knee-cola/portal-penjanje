import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import { IconButton, Icon, Menu, MenuItem, Divider } from '@material-ui/core';
import CustomCardHeader from '../components/CustomCardHeader';

const styles = {
  card: {
    maxWidth: 400,
    margin: '1em'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  darkDivider: {
    backgroundColor: '#bbbbbb'
  }
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
      <Divider className={classes.darkDivider} />
      <CustomCardHeader
        action={
          <IconButton onClick={handleClick}>
            <Icon>more_vert</Icon>
          </IconButton>
        }
        title={`${imeSmjera}, ${ocjenaSmjera}`}
        breadcrumbs={lokacijaSmjera}
      />
      <Divider />
      <CardMedia
        className={classes.media}
        image={thumb}
      />
      <Menu id="simple-menu" anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Info o smjeru</MenuItem>
        <MenuItem onClick={handleClose}>Zabilježi uspon</MenuItem>
      </Menu>
    </Fragment>
  );
}


export default withStyles(styles)( SmjerCard ) ;
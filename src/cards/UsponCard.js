import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link, CardHeader, IconButton, Icon, Collapse, CardActionArea, Menu, MenuItem } from '@material-ui/core';
import { Link as RouterLink, withRouter } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 400,
    margin: '1em'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    cursor: 'pointer',
    borderTop: '1px solid #cccccc',
    borderBottom: '1px solid #cccccc',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: 'transform',
    transitionDuration: 300,
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  actionArea: {
    textAlign: 'center'
  },
};

function UsponCard(props) {
  
  const { classes, history, children, uspon: { id, penjaci, titleImage, images, datumUspona, napomena, smjer: { imeSmjera, lokacijaSmjera, ocjenaSmjera } } } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function gotoDetails() {
    history.push(`/usponi/${id}/`);
  }

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
          onClick={gotoDetails}
          className={classes.media}
          image={titleImage}
        />
        <CardContent>
          <Typography component="p">
            {datumUspona} 
          </Typography>
          <Typography component="p">
            penjali {penjaci.map(({nick, ime, prezime}, ix, self)=> <Fragment key={nick}>{ix===0 ? '': (ix === self.length-1 ? ' i ' : ', ')}<Link component={RouterLink} to={`@${nick}`}>{ime} {prezime}</Link></Fragment>)} 
          </Typography>
        </CardContent>
        {children}
      </Card>
      <Menu id="simple-menu" anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Info o smjeru</MenuItem>
        <MenuItem onClick={handleClose}>Izmjeni zapis</MenuItem>
      </Menu>
    </Fragment>
  );
}

export default withStyles(styles)( UsponCard );
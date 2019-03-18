import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link, CardHeader, IconButton, Icon, Menu, MenuItem, Fade, Grow } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import { usponByID }from '../data-store/DataStore';
import Slide from '@material-ui/core/Slide';

const styles = {
  card: {
    maxWidth: 400,
    margin: '1em'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    borderTop: '1px solid #cccccc',
  },
};

function UsponDetails({ match:{ params:{id}}, classes }) {

  const { penjaci, titleImage, images, datumUspona, napomena, smjer: { imeSmjera, lokacijaSmjera, ocjenaSmjera } } = usponByID( parseInt( id ));
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
        <Slide direction="up" in mountOnEnter unmountOnExit timeout={300}>
          <CardMedia
            className={classes.media}
            image={titleImage}
          />
        </Slide>
        <CardHeader
          action={
            <IconButton onClick={handleClick}>
              <Icon>more_vert</Icon>
            </IconButton>
          }
          title={`${imeSmjera}, ${ocjenaSmjera}`}
          subheader={lokacijaSmjera}
        />
        <CardContent>
          <Typography component="p">
            {datumUspona} penjali {penjaci.map(({nick, ime, prezime}, ix, self)=> <Fragment key={nick}>{ix===0 ? '': (ix === self.length-1 ? ' i ' : ', ')}<Link component={RouterLink} to={`@${nick}`}>{ime} {prezime}</Link></Fragment>)} 
          </Typography>
          <Typography component="p" className={classes.notes}>
            {napomena}
          </Typography>
        </CardContent>
        <Grow in={true}>
          <ImageGallery images={images} />
        </Grow>
      </Card>
      <Menu id="simple-menu" anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Info o smjeru</MenuItem>
        <MenuItem onClick={handleClose}>Izmjeni zapis</MenuItem>
      </Menu>
    </Fragment>
  );
}

export default withStyles(styles)( UsponDetails );
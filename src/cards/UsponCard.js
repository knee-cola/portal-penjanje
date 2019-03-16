import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';


const styles = {
  card: {
    maxWidth: 345,
    margin: '1em',
  },
  media: {
    height: 140,
  },
};

function UsponCard(props) {
  
  const { classes, uspon: { penjaci, titleImage, images, datumUspona, smjer: { imeSmjera, lokacijaSmjera, ocjenaSmjera } } } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={titleImage}
        />
        <CardContent>
          <Typography component="i">
            {datumUspona}
          </Typography>
          <Typography className={classes.nazivSmjera} gutterBottom variant="h5" component="h2">
            {imeSmjera}, {ocjenaSmjera}
          </Typography>
          <Typography component="p">
            {lokacijaSmjera}
          </Typography>
          <Typography component="p">
              Penjali: {penjaci.map(({nick, ime, prezime}, ix)=> <Link key={nick} component={RouterLink} to={`@${nick}`}>{ime} {prezime}</Link>)} 
          </Typography>
          <Typography component="p" className={classes.notes}>
              Predivno vrijeme. Fali prvi spit, a drugi štand je otpao
          </Typography>
          <ImageGallery images={images} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Info o smjeru
        </Button>
      </CardActions>
    </Card>
  );
}


export default withStyles(styles)( UsponCard ) ;
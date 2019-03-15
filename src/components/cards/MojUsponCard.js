import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    margin: '1em',
  },
  media: {
    height: 140,
  },
};

function MojUsponCard(props) {
  
  const { classes, uspon: { penjaci, img, datumUspona, smjer: { imeSmjera, lokacijaSmjera, ocjenaSmjera } } } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {img}
        />
        <CardContent>
          <Typography component="i">
            {datumUspona}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
              {imeSmjera}, {ocjenaSmjera}
          </Typography>
          <Typography component="p">
            {lokacijaSmjera}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Detalji uspona
        </Button>
        <Button size="small" color="primary">
          Info o smjeru
        </Button>
      </CardActions>
    </Card>
  );
}


export default withStyles(styles)(MojUsponCard);
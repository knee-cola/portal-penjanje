import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

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
  
  const { history, classes, uspon: { id, penjaci, img, datumUspona, smjer: { imeSmjera, lokacijaSmjera, ocjenaSmjera } } } = props;
  const usponUrl = `/usponi/${datumUspona.replace(/\./g,'-').substr(0,10)}/${imeSmjera.toLocaleLowerCase().replace(' ','-')}-${id}/`;

  return (
    <Card className={classes.card} onClick={() => history.push(usponUrl)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {img}
        />
        <CardContent>
          <Typography component="p">
            {datumUspona} {penjaci.join(', ')}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
              {imeSmjera}, {ocjenaSmjera}
          </Typography>
          <Typography component="i">
            {lokacijaSmjera}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Detalji uspona
        </Button>
        <Button size="small" color="primary">
          Želim to penjati
        </Button>
      </CardActions>
    </Card>
  );
}


export default withStyles(styles)( withRouter(UsponCard) ) ;
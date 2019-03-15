import React from 'react';
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

function SmjerCard(props) {
  
  const { classes, smjer:{imeSmjera, thumb, lokacijaSmjera, ocjenaSmjera} } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {thumb}
        />
        <CardContent>
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
          Info o smjeru
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(SmjerCard);
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import defaultAvatar from '../img/baseline-person-24px.svg';

const styles = {
  card: {
    maxWidth: 345,
    margin: '1em',
  },
  media: {
    float: 'left',
    height: 90,
    width: 90,
    marginRight: 10
  },
};

function PartnerCard(props) {
  
  const { classes, partner: { ime, prezime, nick, avatar } } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
            className={classes.media}
            image={avatar || defaultAvatar}
            />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {ime} {prezime}
            </Typography>
            <Typography component="i">
                @{nick}
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small" color="primary">
          Zajedno smo penjali
        </Button>
        <Button size="small" color="primary">
          Zadnje je penjao/la
        </Button>
      </CardActions>
    </Card>
  );
}


export default withStyles(styles)(PartnerCard);
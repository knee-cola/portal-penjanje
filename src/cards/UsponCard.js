import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link, CardHeader, IconButton, Icon, Collapse, CardActionArea } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import classnames from 'classnames';

const styles = {
  card: {
    maxWidth: 400,
    margin: '1em'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  
  const { classes, uspon: { penjaci, titleImage, images, datumUspona, napomena, smjer: { imeSmjera, lokacijaSmjera, ocjenaSmjera } } } = props;

  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton>
            <Icon>more_vert</Icon>
          </IconButton>
        }
        title={`${imeSmjera}, ${ocjenaSmjera}`}
        subheader={lokacijaSmjera}
      />
      <CardMedia
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
      <CardActionArea onClick={handleExpandClick} aria-label="Show more" className={classes.actionArea}>
        <Icon className={classnames(classes.expand, { [classes.expandOpen]: expanded })}>expand_more</Icon>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography component="p" className={classes.notes}>
            {napomena}
          </Typography>
          <ImageGallery images={images} />
        </CardContent>
      </Collapse>
    </Card>
  );
}


export default withStyles(styles)( UsponCard ) ;
import React from 'react';
import { Paper, Typography, withStyles, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';

import img0 from '../img//usponi/brid-za-veliki-cekic-0.jpg';
import img1 from '../img//usponi/brid-za-veliki-cekic-1.jpg';
import img2 from '../img//usponi/brid-za-veliki-cekic-2.jpg';
import img3 from '../img//usponi/brid-za-veliki-cekic-3.jpg';

const styles = {
    paper: {
      width: 345,
      padding: 10
    },
    nazivSmjera: {
        marginBottom: 0
    }
  };

const images = [
    { file: img0, cols: 3, title:'' },
    { file: img1, cols: 1, title:'' },
    { file: img2, cols: 1, title:'' },
    { file: img3, cols: 1, title:'' },
];

const UsponDetails = ({classes}) =>
<Paper className={classes.paper}>
    <Typography component="i">
        15.05.2019.
    </Typography>
    <Typography className={classes.nazivSmjera} gutterBottom variant="h5" component="h2">
        Nosorog 6a
    </Typography>
    <Typography component="p">
        Kuk od Nosoroga
    </Typography>
    <Typography component="p">
        Penjali: <Link component={RouterLink} to="/penjaci/@knee-cola/">Nikola Derežić</Link> i <Link component={RouterLink} to="/penjaci/@krcko/">Dragutin Vdović</Link>
    </Typography>
    <ImageGallery images={images} />
    <Typography component="p">
        Predivno vrijeme. Fali prvi spit, a drugi štand je otpao
    </Typography>
</Paper>;

export default withStyles(styles)(UsponDetails);
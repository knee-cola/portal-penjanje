import React from 'react';
import { Paper, Typography, withStyles, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const styles = {
    paper: {
      width: 345,
      padding: 10
    },
    nazivSmjera: {
        marginBottom: 0
    }
  };
  
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
</Paper>;

export default withStyles(styles)(UsponDetails);
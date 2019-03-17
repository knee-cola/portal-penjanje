import React from 'react';
import UsponCard from '../cards/UsponCard';
import { CardContent, Typography, withStyles } from '@material-ui/core';
import ImageGallery from '../components/ImageGallery';
import { usponByID } from '../data-store/DataStore';

const styles = {

};

function UsponDetails({classes}) {

    const usponID = window.location.pathname.split('/')[2],
          uspon = usponByID( parseInt(usponID));

    return(
        <UsponCard uspon={uspon} >
          <CardContent>
            <Typography component="p" className={classes.notes}>
              {uspon.napomena}
            </Typography>
            <ImageGallery images={uspon.images} />
          </CardContent>
        </UsponCard>
    );
}

export default withStyles(styles)( UsponDetails ) ;
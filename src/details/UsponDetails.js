import React from 'react';
import UsponCard from '../cards/UsponCard';
import { CardContent, Typography, withStyles } from '@material-ui/core';
import ImageGallery from '../components/ImageGallery';
import { usponByID } from '../data-store/DataStore';

const styles = {

};

function UsponDetails({classes}) {

    const urlParts = window.location.pathname.split('/'),
          // zadnji dio URL-a sadrži ID
          uspon = usponByID( parseInt( urlParts[urlParts.length-2] ));

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
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import { IconButton, Icon, withStyles } from '@material-ui/core';

const styles = theme => ({
  paper: {
    margin: 0
  },
  buttons: {
    position: 'absolute',
    color: 'white',
    textShadow: '1px 1px 5px black'   
  },
  closeButton: {
    right: 0,
  },
  prevButton: {
    top: 0,
    bottom: 0,
    left: 0,
  },
  nextButton: {
    top: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
  }
});


function ImageLightBox(props) {
  const { onClose, onNextClick, onPrevClick, classes, images, imageIndex } = props;

  if(imageIndex===null) { return(null); }

  const image = images[imageIndex];

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={true} classes={{paper: classes.paper}}>
        <IconButton aria-label="Previous image" onClick={onPrevClick} className={classes.buttons+' '+classes.prevButton}>
          <Icon>arrow_back_ios</Icon>
        </IconButton>
        <IconButton aria-label="Next image" onClick={onNextClick} className={classes.buttons+' '+classes.nextButton}>
          <Icon>arrow_forward_ios</Icon>
        </IconButton>
        <IconButton aria-label="Close" onClick={onClose} className={classes.buttons+' '+classes.closeButton}>
          <Icon>cancel</Icon>
        </IconButton>
        <img src={image.file} alt={image.title} className={classes.image} />
    </Dialog>
  );
}

ImageLightBox.propTypes = {
  onClose: PropTypes.func
};

export default withStyles(styles)(ImageLightBox);

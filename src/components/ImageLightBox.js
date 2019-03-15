import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import { IconButton, Icon } from '@material-ui/core';

function ImageLightBox(props) {
  const { onClose, open, image } = props;

  function handleClose() {
    onClose();
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} >
        <IconButton aria-label="Close" onClick={handleClose}>
          <Icon>close</Icon>
        </IconButton>
        <img src={image.file} alt={image.title} height="100%" />
    </Dialog>
  );
}

ImageLightBox.propTypes = {
  onClose: PropTypes.func
};

export default ImageLightBox;
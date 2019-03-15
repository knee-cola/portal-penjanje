import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ImageLightBox from './ImageLightBox';

const styles = theme => ({
  root: {
    marginTop: 10,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // dimenzije se podešavaju automatski
    // width: 500,
    // height: 450,
  },
});

function ImageGallery(props) {
  const { classes, images } = props;

  const [lightBoxOpen, setLightBoxOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(false);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setLightBoxOpen(true);
  }
  const handleClickClose = () => {
    setLightBoxOpen(false);
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map(image => (
          <GridListTile key={image.file} cols={image.cols || 1} onClick={() => handleClickOpen(image)}>
            <img src={image.file} alt={image.title} />
          </GridListTile>
        ))}
      </GridList>
      <ImageLightBox open={lightBoxOpen} onClose={handleClickClose} image={selectedImage} />
    </div>
  );
}

ImageGallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGallery);
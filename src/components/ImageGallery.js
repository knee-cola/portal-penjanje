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
  gridTile: {
    cursor: 'pointer'
  }
});

function ImageGallery(props) {
  const { classes, images } = props;

  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleClickOpen = (index) => {
    setSelectedImage(index);
  }
  const handleClickClose = () => {
    setSelectedImage(null);
  }
  const handleNextClick = () => {
    if(selectedImage<images.length-1) {
      setSelectedImage(selectedImage+1);
    }
  }
  const handlePrevClick = () => {
    if(selectedImage>0) {
      setSelectedImage(selectedImage-1);
    }
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map((image,index) => (
          <GridListTile className={classes.gridTile} key={image.file} cols={image.cols || 1} onClick={() => handleClickOpen(index)}>
            <img src={image.file} alt={image.title} />
          </GridListTile>
        ))}
      </GridList>
      <ImageLightBox
        onClose={handleClickClose}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
        images={images}
        imageIndex={selectedImage} />
    </div>
  );
}

ImageGallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGallery);
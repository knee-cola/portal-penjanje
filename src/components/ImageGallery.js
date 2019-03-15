import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGallery);
// based on https://github.com/corpix/material-ui-upload/blob/master/src/UploadPreview/index.js
import React, {Component} from 'react';
import propTypes from 'prop-types';
import ImageUpload from './ImageUpload';
import { Fab, Icon, withStyles } from '@material-ui/core';

const useStyles = theme => {
    const borderColor = theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  
    return {
      root: {
        borderRadius: theme.shape.borderRadius,
        borderStyle: 'solid',
        borderWidth: 1,
        padding:'1em',
        borderColor,
        marginTop: '1.2em',
        '&:hover': {
          borderColor: theme.palette.text.primary,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor,
          },
        },
      },
      PreviewContainer: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      ButtonContainer: {
        display:'block',
        marginTop:'1em',
        textAlign:'right'
      },
      ImageContainer: {
          position: 'relative',
          boxSizing: 'border-box',
          flex: '1 0 200px',
          maxHeight: 250,
          overflow: 'hidden',
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor,
      },
      Image: {
          verticalAlign: 'top',
          maxWidth: '100%',
          minWidth: '100%',
          width: '100%',
      },
      RemoveItem: {
          //color: 'red',
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 10,
          right: 10,
      }
    }
};
class ImageUploadPreview extends Component {

    static defaultProps = {
        title: '',
        label: 'Upload',
        fileTypeRegex: /^image.*$/,
        onChange: (items) => undefined,
        initialItems: []
    };

    static propTypes = {
        title: propTypes.string,
        label: propTypes.string,
        fileTypeRegex: propTypes.object,
        onChange: propTypes.func,
        initialItems: propTypes.array
    };

    constructor(props) {
        super(props);
        this.lastKey = 0;
        this.state = {items: props.initialItems};
        this.classes = props.classes;
    };

    onFileLoad = (e, file) => {
        const items = this.state.items;
        this.setState({ items:[...items, {key: this.lastKey++, imageData:e.target.result }] });

        this.props.onChange(items);
    };

    onRemoveClick = (key2remove) => (e) => {
        let items = this.state.items.filter(({key}) => key !== key2remove);
        this.setState({items});
        this.props.onChange(items);
    };

    render() {
        const classes = this.classes;

        return (
            <div className={classes.root}>
                <div className={classes.PreviewContainer}>
                {
                    this.state.items.map(({key, imageData}) => 
                    <div key={key} className={classes.ImageContainer}>
                        <img src={imageData} className={classes.Image} alt="" />
                        <Fab
                            className={classes.RemoveItem}
                            size="small"
                            onClick={this.onRemoveClick(key)}
                            >
                            <Icon>close</Icon>
                        </Fab>
                    </div>)
                }
                </div>
                <div className={classes.ButtonContainer}>
                    <ImageUpload onFileLoad={this.onFileLoad} buttonLabel={this.props.buttonLabel} />
                </div>
            </div>
        );
    };
}

export default withStyles(useStyles)(ImageUploadPreview);
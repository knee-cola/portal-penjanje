// based on https://github.com/corpix/material-ui-upload/blob/master/src/UploadPreview/index.js
import React, {Component, Fragment} from 'react';
import propTypes from 'prop-types';
import styles from './ImageUploadPreview.css';
import ImageUpload from './ImageUpload';
import { CardHeader, CardContent, Card, CardActions, Fab, Icon } from '@material-ui/core';

export default class ImageUploadPreview extends Component {

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
        super();
        this.lastKey = 0;
        this.state = {items: props.initialItems};
    };

    onFileLoad = (e, file) => {
        const items = this.state.items;
        this.setState({ items:[...items, {key: this.lastKey++, imageData:e.target.result }] });

        this.props.onChange(items);
    };

//    onRemoveAllClick = (e) => {
//        let items = {};
//        this.setState({items});
//        this.props.onChange(items);
//    };
//
    onRemoveClick = (key2remove) => (e) => {
        let items = this.state.items.filter(({key}) => key !== key2remove);
        this.setState({items});
        this.props.onChange(items);
    };

    render() {
        return (
            <Fragment>
                {
                    this.state.items.map(({key, imageData}) => 
                    <div key={key} className={styles.PreviewContainer}>
                        <img src={imageData} className={styles.Image} alt="" />
                        <Fab
                            className={styles.RemoveItem}
                            size="small"
                            onClick={this.onRemoveClick(key)}
                            >
                            <Icon>remove</Icon>
                        </Fab>
                    </div>)
                }
                <ImageUpload onFileLoad={this.onFileLoad} />
            </Fragment>
        );
    };
}
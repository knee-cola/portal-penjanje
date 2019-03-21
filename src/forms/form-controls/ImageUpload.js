// *-* mode: rjsx -*-
// based on https://www.npmjs.com/package/material-ui-upload
import React, {Component, Fragment} from 'react';
import styles from './ImageUpload.css';
import { Button } from '@material-ui/core';

export default class ImageUpload extends Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        const onFileLoad = this.props.onFileLoad || ((e) => undefined);

        [...e.target.files]
            .filter(file => file.type.match(this.props.fileTypeRegex) !== null)
            .forEach(
                (file) => {
                    let reader = new FileReader();
                    reader.onload = (e) => onFileLoad(e, file);
                    reader.readAsDataURL(file);
                }
            );
    }

    render() {
        return (
            <Fragment>
                <input
                    accept="image/jpeg"
                    className={styles.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={this.onInputChange}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className={styles.FileInput}>
                        Dodaj sliku
                    </Button>
                </label>
            </Fragment>
        );
    }

}
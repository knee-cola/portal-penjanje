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

    onInputChange(changeEvent) {
        const onFileLoad = this.props.onFileLoad || ((e) => undefined);
        const target = changeEvent.target;

        // ovo nije polje, pa ga moram pretvoriti kako bih mogao pozivati `filter`
        [...target.files]
            .filter(file => file.type.match(this.props.fileTypeRegex) !== null)
            .forEach(
                (file) => {
                    let reader = new FileReader();
                    reader.onload = (loadEvent) => {
                        onFileLoad(loadEvent, file);
                        // ako ne resetiram vrijednost tada
                        // <input> neće pokrenuti `onChange` ako 2x za redom pokušam učitati istu sliku
                        target.value = null;
                    }
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
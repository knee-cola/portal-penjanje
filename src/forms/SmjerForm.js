import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import 'date-fns';  // provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates
import DateFnsUtils from '@date-io/date-fns'; // Abstraction over common javascript date management libraries.
import { FormControlLabel, Switch, Checkbox, Button, Radio, RadioGroup, FormLabel, FormControl, Select, OutlinedInput, MenuItem, InputLabel, Fade, Typography } from '@material-ui/core';
import AutocompleteSelect from './form-controls/AutocompleteSelect';
import { smjerovi, penjaci, tipoviUspona, mjestoUNavezu } from '../data-store/DataStore';
// import StyledImageUploader from './form-controls/StyledImageUploader';
// import UploadPreview from 'material-ui-upload/UploadPreview';
import ImageUploadPreview from './form-controls/ImageUploadPreview';
import withRouter from 'react-router-dom/withRouter';


const useStyles = makeStyles(theme => ({
  form: {
    padding: '0 1em',
  },
  textField: {
    flex: 1,
    width: '100%',
  },
  prvenstveniControl: {
    marginLeft: 0,
    marginTop: '.5em',
    display: 'flex', // zauzimam cijeli redak
  },
  checkbox: {
    padding: 5,
  },
  button: {
    margin: '1em auto 2em auto',
    display: 'block',
    padding: '1em 2em'
  },
  radioGroup: {
    //flexDirection: 'column'
  },
  radioGroupControl: {
    marginTop: '1em',
    marginLeft: 10,
  },
  radioOption: {
    padding: '8px 5px 8px 12px', // elementi su bili previše razmaknuti
  },
  radioGroupLabel: {
    marginBottom: 8,
  },
  tipUsponaControl: {
    marginTop: '1em',
    width: '100%'
  },
  autocomplete: {
    marginTop: '2em'
  },
  caption: {
    marginTop: '0.5em',
    textAlign: 'center',
  },
}));

// ovo tek treba implementirati
const drzavaSuggestions = [];
const goraSuggestions = [];
const sektorSuggestions = [];

function SmjerForm() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    drzava:'',
    gora:'',
    sektor:'',
    imeSmjera:'',
    opisSmjera:'',
    pictures: [],
  });

  const handleChange = (name, propertyName='value') => event => {
    setValues({ ...values, [name]: event.target[propertyName] });
  };

  const handleAutoSelectChange = (name) => eventData => {
    setValues({ ...values, [name]: eventData });
  };

  const handlePicturesChange = items => {
    setValues({ ...values, pictures: items });
  };

  return (
    <Fragment>
      <Fade in={true} timeout={700}>
        <form noValidate autoComplete="off" className={classes.form}>
            <AutocompleteSelect
              id="drzava"
              label="Država"
              value={values.smjer}
              onChange={handleAutoSelectChange('drzava')}
              className={classes.autocomplete}
              suggestions={drzavaSuggestions}
              placeholder="Odaberite državu"
            />
            <AutocompleteSelect
              id="gora"
              label="Gora"
              value={values.smjer}
              onChange={handleAutoSelectChange('gora')}
              className={classes.autocomplete}
              suggestions={goraSuggestions}
              placeholder="Odaberite goru"
            />
            <AutocompleteSelect
              id="sektor"
              label="Sektor/stijena"
              value={values.smjer}
              onChange={handleAutoSelectChange('sektor')}
              className={classes.autocomplete}
              suggestions={sektorSuggestions}
              placeholder="Odaberite sektor"
            />
            <TextField
                id="imeSmjera"
                value={values.napomene}
                onChange={handleChange('imeSmjera')}
                label="Ime smjera"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="opisSmjera"
                value={values.napomene}
                onChange={handleChange('opisSmjera')}
                label="Opis smjera"
                multiline
                rows="5"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <ImageUploadPreview
                title="Skice smjera"
                buttonLabel="Dodaj skicu"
                initialItems={values.pictures}
                onChange={handlePicturesChange}
                />
            <Button variant="contained" color="primary" className={classes.button}>Spremi smjer</Button>
        </form>
      </Fade>
    </Fragment>
  );
}

export default withRouter(SmjerForm);
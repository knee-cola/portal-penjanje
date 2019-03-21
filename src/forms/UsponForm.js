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

const smjeroviSuggestions = smjerovi.map(({id, imeSmjera, lokacijaSmjera}) => ({
  value: id,
  label: imeSmjera,
  subLabel: lokacijaSmjera
}));

const partneriSuggestions = penjaci.map(({id, ime, prezime, nick}) => ({
  value: id,
  label: `${ime} ${prezime} (@${nick})`,
}));

function UsponForm() {
  const classes = useStyles();

  const [labelWidth, setLabelWidth] = React.useState(0);

  const inputLabelRef = React.useRef(null);

  React.useEffect(() => {
    setLabelWidth(ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth);
  }, []);

  const [values, setValues] = React.useState({
    smjer: '',
    partneri: '',
    napomene: '',
    javnaObjava: true,
    datumUspona: new Date(),
    prvenstveniUspon: false,
    tipUspona: '',
    pictures: [],
  });

  const handleChange = (name, propertyName='value') => event => {
    setValues({ ...values, [name]: event.target[propertyName] });
  };

  const handleAutoSelectChange = (name) => eventData => {
    setValues({ ...values, [name]: eventData });
  };

  const handleDateChange = name => date => {
    setValues({ ...values, [name]: date });
  };

  const handlePicturesChange = items => {
    setValues({ ...values, pictures: items });
  };

  const handleCreateSmjer = imeSmjera => {
    console.warn('ovo još nije implementirano - treba prikazati formu za kreiranje novog smjera');
  }

	//const onDrop = (pictureFiles, pictureDataURLs) => {
	//	setValues({ pictures: values.pictures.concat(pictureFiles) });
  //}

  return (
    <Fragment>
      <Fade in={true} timeout={700}>
        <form noValidate autoComplete="off" className={classes.form}>
            <AutocompleteSelect
              id="smjer"
              label="Smjer"
              value={values.smjer}
              onChange={handleAutoSelectChange('smjer')}
              className={classes.autocomplete}
              suggestions={smjeroviSuggestions}
              placeholder="Odaberite penjani smjer"
              onCreateOption={handleCreateSmjer}
            />
            <Typography variant="caption" className={classes.caption}>ako ste u usponu kombinirali više smjerova dodajte ih sve</Typography>
            <FormControl variant="outlined" className={classes.tipUsponaControl}>
              <InputLabel ref={inputLabelRef} htmlFor="outlined-age-simple">Tip uspona</InputLabel>
              <Select value={values.tipUspona} onChange={handleChange('tipUspona')} input={ <OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" style={{width:'100%'}} /> }>
                {tipoviUspona.map(({id, label}) => <MenuItem key={id} value={id}>{label}</MenuItem>)}
              </Select>
            </FormControl>
            <FormControlLabel
                className={classes.prvenstveniControl}
                control={
                    <Checkbox
                        className={classes.checkbox}
                        checked={values.prvenstveniUspon}
                        onChange={handleChange('prvenstveniUspon', 'checked')}
                        color="primary"
                    />
                }
                label='prvenstveni uspon'
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    margin="normal"
                    label="Datum uspona"
                    value={values.datumUspona}
                    onChange={handleDateChange('datumUspona')}
                    variant="outlined"
                    format={"dd.MM.yyyy."}
                />
            </MuiPickersUtilsProvider>
            <AutocompleteSelect
              id="partneri"
              label="Partner"
              value={values.partneri}
              onChange={handleAutoSelectChange('partneri')}
              className={classes.autocomplete}
              suggestions={partneriSuggestions}
              placeholder="Odaberite partnera"
            />
            <Typography variant="caption" className={classes.caption}>ako ste penjali u troje dodjte oba partnera</Typography>
            <FormControl component="fieldset"className={classes.radioGroupControl}>
              <FormLabel component="legend" className={classes.radioGroupLabel}>Mjesto u navezu</FormLabel>
              <RadioGroup
                aria-label="Mjesto u navezu"
                name="mjestoUNavezu"
                className={classes.radioGroup}
                value={values.mjestoUNavezu}
                onChange={handleChange}
                variant="outlined"
              >
                { mjestoUNavezu.map(({id,label}) => <FormControlLabel value={id+''} control={<Radio className={classes.radioOption} color="primary" />} label={label} key={id} />) }
              </RadioGroup>
            </FormControl>
            <TextField
                id="napomene"
                value={values.napomene}
                onChange={handleChange('napomene')}
                label="Napomene"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <Typography variant="caption" className={classes.caption}>ovaj tekst će biti prikazan i u javnom post-u</Typography>
            <ImageUploadPreview
                title="Fotografije"
                label="Dodaj"
                initialItems={values.pictures}
                onChange={handlePicturesChange}
                />
            <FormControlLabel
                className={classes.checkbox}
                control={
                    <Switch
                        checked={values.javnaObjava}
                        onChange={handleChange('javnaObjava', 'checked')}
                        color="primary"
                    />
                }
                label='objavi javno na stranici "Zadnje penjano"'
            />
            <Button variant="contained" color="primary" className={classes.button}>Spremi uspon</Button>
        </form>
      </Fade>
    </Fragment>
  );
}

export default UsponForm;
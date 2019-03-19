import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import 'date-fns';  // provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates
import DateFnsUtils from '@date-io/date-fns'; // Abstraction over common javascript date management libraries.
import { FormControlLabel, Switch, Checkbox, Button, Radio, RadioGroup, FormLabel, FormControl, Select, OutlinedInput, MenuItem, InputLabel, Fade } from '@material-ui/core';
import AutocompleteSelect from './form-controls/AutocompleteSelect';
import { smjerovi, penjaci } from '../data-store/DataStore';

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
    flexDirection: 'row'
  },
  tipUsponaControl: {
    marginTop: '1em',
  },
  radioGroupControl: {
    marginTop: '1em',
    marginLeft: 10,
  },
  autocomplete: {
    marginTop: '2em'
  }
}));

const smjeroviSuggestions = smjerovi.map(({id, imeSmjera}) => ({
  value: id,
  label: imeSmjera,
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
            />
            <FormControl variant="outlined" className={classes.tipUsponaControl}  style={{width:'100%'}}>
              <InputLabel ref={inputLabelRef} htmlFor="outlined-age-simple">Tip uspona</InputLabel>
              <Select value={values.tipUspona} onChange={handleChange('tipUspona')} input={ <OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" style={{width:'100%'}} /> }>
                <MenuItem value=""></MenuItem>
                <MenuItem value="kratskiSportski">kratki sportski smjer</MenuItem>
                <MenuItem value="dugiSportski">dugi sportski smjer</MenuItem>
                <MenuItem value="dugiKlasicni">dugi klasični smjer</MenuItem>
                <MenuItem value="dugiZimski">dugi zimski smjer</MenuItem>
                <MenuItem value="zimskiSlap">slap - ledno penjanje</MenuItem>
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
              label="Partneri"
              value={values.partneri}
              onChange={handleAutoSelectChange('partneri')}
              className={classes.autocomplete}
              suggestions={partneriSuggestions}
              placeholder="Odaberite jednog ili više partnera"
            />
            <FormControl component="fieldset" className={classes.radioGroupControl}>
              <FormLabel component="legend"  className={classes.radioGroupLabel}>Mjesto u navezu</FormLabel>
              <RadioGroup
                aria-label="Mjesto u navezu"
                name="mjestoUNavezu"
                className={classes.radioGroup}
                value={values.mjestoUNavezu}
                onChange={handleChange}
                variant="outlined"
              >
                <FormControlLabel value="svePrvi" control={<Radio color="primary" />} label="sve kao prvi" />
                <FormControlLabel value="sveDrugi" control={<Radio color="primary" />} label="sve kao drugi" />
                <FormControlLabel value="naizmjenicno" control={<Radio color="primary" />} label="naizmjenično" />
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
                helperText="ovaj tekst be biti prikazan i u javnom post-u"
                variant="outlined"
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
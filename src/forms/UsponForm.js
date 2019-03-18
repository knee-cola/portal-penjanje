import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import 'date-fns';  // provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates
import DateFnsUtils from '@date-io/date-fns'; // Abstraction over common javascript date management libraries.
import { Paper, FormControlLabel, Switch, Checkbox, Button, Radio, RadioGroup, FormLabel, FormControl, Select, OutlinedInput, MenuItem, InputLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '0 1em',
    display: 'flex',
    // alignItems: 'center',
    width: 400,
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
  tipUsponaCoontrol: {
    marginTop: '1em',
  },
  radioGroupControl: {
    marginTop: '1em',
    marginLeft: 10,
  }
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

  const handleDateChange = name => date => {
    setValues({ ...values, [name]: date });
  };


  return (
    <Paper className={classes.container}>
        <form noValidate autoComplete="off">
            <TextField
                required
                id="smjer"
                value={values.smjer}
                label="Smjer"
                className={classes.textField}
                value={values.smjer}
                onChange={handleChange('smjer')}
                margin="normal"
                type="search"
                variant="outlined"
                />
            <FormControl variant="outlined" className={classes.tipUsponaCoontrol}  style={{width:'100%'}}>
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
            <TextField
                id="partneri"
                value={values.partneri}
                onChange={handleChange('partneri')}
                required
                label="Partneri"
                className={classes.textField}
                margin="normal"
                variant="outlined"
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
    </Paper>
  );
}

export default UsponForm;
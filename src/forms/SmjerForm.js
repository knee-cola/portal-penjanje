import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Select, Fade, MenuItem, OutlinedInput, FormControl, InputLabel, AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import AutocompleteSelect from './form-controls/AutocompleteSelect';
import ImageUploadPreview from './form-controls/ImageUploadPreview';
import withRouter from 'react-router-dom/withRouter';
import { tipoviSmjera } from '../data-store/DataStore';
import SwipeableViews from 'react-swipeable-views';

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
  tipSmjeraControl: {
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


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

// ovo tek treba implementirati
const drzavaSuggestions = [
  {id: 2, label:'Austrija'},
  {id: 3, label:'Francuska'},
  {id: 0, label:'Hrvatska'},
  {id: 7, label:'Italija'},
  {id: 4, label:'Njemačka'},
  {id: 1, label:'Slovenija'},
  {id: 5, label:'Švicarska'},
];

const goraSuggestions = [
  {id: 0, label:'Velika Paklenica'},
  {id: 1, label:'Vela draga'},
  {id: 2, label:'Kamenjak'},
  {id: 3, label:'Dvigrad'},
  {id: 4, label:'Triglav'},
  {id: 5, label:'Velika baba'},
  {id: 5, label:'Mala mojstrovka'},
  {id: 5, label:'Prisojnik'},
  {id: 5, label:'Dabarski kukovi'},
];

const sektorSuggestions = [
  {id: 0, label:'Sjeverna stijena Anića Kuka'},
  {id: 1, label:'Stup anića kuka'},
  {id: 2, label:'Kuk od skradelin'},
  {id: 3, label:'Sjeverna stijena'},
  {id: 4, label:'Obli kuk'},
  {id: 5, label:'Rujičin kuk'},
];

function SmjerForm() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    drzava:'',
    gora:'',
    sektor:'',
    imeSmjera:'',
    duzinaSmjera: '',
    tipOpisa: 0,
    opisSmjera:'',
    tezinaSmjera:'',
    tipSmjera:'',
    pictures: [],
  });

  const inputLabelRef = React.useRef(null);

  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth);
  }, []);

  const handleChangeEvent = (name, propertyName='value') => event => {
    setValues({ ...values, [name]: event.target[propertyName] });
  };

  const handleValueChange = (name) => newValue => {
    setValues({ ...values, [name]: newValue });
  };

  return (
    <Fragment>
      <Fade in={true} timeout={700}>
        <form noValidate autoComplete="off" className={classes.form}>
            <AutocompleteSelect
              id="drzava"
              label="Država"
              value={values.smjer}
              onChange={handleValueChange('drzava')}
              className={classes.autocomplete}
              suggestions={drzavaSuggestions}
              placeholder="Odaberite državu"
              isMulti={false}
              isClearable={true}
            />
            <AutocompleteSelect
              id="gora"
              label="Gora"
              value={values.smjer}
              onChange={handleValueChange('gora')}
              className={classes.autocomplete}
              suggestions={goraSuggestions}
              placeholder="Odaberite goru"
              isMulti={false}
              isClearable={true}
            />
            <AutocompleteSelect
              id="sektor"
              label="Sektor/stijena"
              value={values.smjer}
              onChange={handleValueChange('sektor')}
              className={classes.autocomplete}
              suggestions={sektorSuggestions}
              placeholder="Odaberite sektor"
              isMulti={false}
              isClearable={true}
            />
            <TextField
                id="imeSmjera"
                value={values.napomene}
                onChange={handleChangeEvent('imeSmjera')}
                label="Ime smjera"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <FormControl variant="outlined" className={classes.tipSmjeraControl}>
              <InputLabel ref={inputLabelRef} htmlFor="tip-smjera">Tip smjera</InputLabel>
              <Select
                value={values.tipSmjera}
                onChange={handleChangeEvent('tipSmjera')}
                input={
                  <OutlinedInput
                    labelWidth={labelWidth}
                    name="age"
                    id="tip-smjera"
                    style={{width:'100%'}} />
                  }>
                { tipoviSmjera.map(({id, name}) => <MenuItem key={id} value={id}>{name}</MenuItem>) }
              </Select>
            </FormControl>
            <TextField
                id="duzinaSmjera"
                value={values.napomene}
                onChange={handleChangeEvent('duzinaSmjera')}
                label="Dužina (m)"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="tezinaSmjera"
                value={values.napomene}
                onChange={handleChangeEvent('tezinaSmjera')}
                label="Težina"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <Tabs
                value={values.tipOpisa}
                onChange={(event, newValue) => handleValueChange('tipOpisa')(newValue)}
                indicatorColor="primary"
                textColor="primary"
                variant={null}
              >
                <Tab label="Jednostavan opis" />
                <Tab label="Detaljan opis" />
            </Tabs>
              { values.tipOpisa === 0 && 
                    <TextField
                      id="opisSmjera"
                      value={values.napomene}
                      onChange={handleChangeEvent('opisSmjera')}
                      label="Opis smjera"
                      multiline
                      rows="5"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                  />
              }
              { values.tipOpisa === 1 && 
                <div>
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                  <br/>Detaljni opis
                </div>
              }
            <ImageUploadPreview
                title="Skice smjera"
                buttonLabel="Dodaj skicu"
                initialItems={values.pictures}
                onChange={handleValueChange('pictures')}
                />
            <Button variant="contained" color="primary" className={classes.button}>Spremi smjer</Button>
        </form>
      </Fade>
    </Fragment>
  );
}

export default withRouter(SmjerForm);
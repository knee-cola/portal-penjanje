import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import NavBar from './components/NavBar';
import { TextField } from '@material-ui/core';
import MediaCard from './components/Card';
import IMG1 from './img/velebitas.jpg';
import IMG2 from './img/grapa.jpg';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Button variant="outlined" color="primary">
          <Bookmarks></Bookmarks>
        </Button> <br />
        <TextField placeholder="Placeholder here" label="Basic TextField" />
        <MediaCard uspon={{
            penjaci:['Dragutin Vdović', 'Nikola Derežić'],
            img: IMG1,
            datumUspona:'23.03.2019.',
            smjer:{
                imeSmjera:'Velebitaš',
                lokacijaSmjera:'Sjeverna stijena, Anića kuk, Velika Paklenica, Croatia',
                ocjenaSmjera:'6a+'
              }
            }} />
        <MediaCard uspon={{
            penjaci:['Rene Lisac', 'Marin Šapit'],
            img: IMG2,
            datumUspona:'23.03.2019.',
            smjer:{
                imeSmjera:'Pripravniška grapa',
                ocjenaSmjera:'VI+ / M3',
                lokacijaSmjera:'Mala Mojstrovka, Julijske alpe, Slovenija',
              }
            }} />
      </div>
    );
  }
}

export default App;

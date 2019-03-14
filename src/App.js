import React from 'react';
import NavBar from './components/NavBar';
import MediaCard from './components/Card';
import IMG1 from './img/velebitas.jpg';
import IMG2 from './img/grapa.jpg';
import { AppMenu } from './components/AppMenu';

function App(props) {

  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMenuOpen(!menuOpen);
  }

  return (
      <div>
        <NavBar handleDrawerToggle={handleDrawerToggle} />
        <AppMenu handleDrawerToggle={handleDrawerToggle} menuOpen={menuOpen} />
        <div style={{marginTop:85}}>
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
      </div>
    );
}; 

export default App;

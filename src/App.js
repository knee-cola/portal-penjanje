import React from 'react';
import NavBar from './components/NavBar';
import { AppMenu } from './components/AppMenu';
import { ZadnjePenjano } from './activities/ZadnjePenjano';
import { BrowserRouter, Route } from 'react-router-dom';
import { MojiUsponi } from './activities/MojiUsponi';
import { MojiPartneri } from './activities/MojiPartneri';
import { Smjerovi } from './activities/Smjerovi';

function App(props) {

  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMenuOpen(!menuOpen);
  }

  
  const basename = window.location.hostname === "knee-cola.github.io" ? "/portal-penjanje/" : '';

  return (
    <BrowserRouter basename={basename}>
      <div>
        <NavBar handleDrawerToggle={handleDrawerToggle} />
        <AppMenu handleDrawerToggle={handleDrawerToggle} menuOpen={menuOpen} />
        <div style={{marginTop:85}}>
            <Route path="/" exact component={ZadnjePenjano} />
            <Route path="/smjerovi/" component={Smjerovi} />
            <Route path="/moji-usponi/" component={MojiUsponi} />
            <Route path="/moji-partneri/" component={MojiPartneri} />
        </div>
      </div>
      </BrowserRouter>
    );
}; 

export default App;

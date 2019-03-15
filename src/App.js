import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './navigation/NavBar';
import { AppMenu } from './navigation/AppMenu';
import { ZadnjePenjano } from './lists/ZadnjePenjano';
import { MojiUsponi } from './lists/MojiUsponi';
import { MojiPartneri } from './lists/MojiPartneri';
import { Smjerovi } from './lists/Smjerovi';
import UsponDetails from './details/UsponDetails';
import { Grid } from '@material-ui/core';

function App(props) {

  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMenuOpen(!menuOpen);
  }

  // u produkciji se web aplikacija ne nalazi u root path-u
  const basename = window.location.hostname === "knee-cola.github.io" ? "/portal-penjanje/" : '';

  return (
    <BrowserRouter basename={basename}>
      <div>
        <NavBar handleDrawerToggle={handleDrawerToggle} />
        <AppMenu handleDrawerToggle={handleDrawerToggle} menuOpen={menuOpen} />
        <Grid container justify="center" style={{marginTop:85}}>
          <Grid item>
            <Route path="/" exact component={ZadnjePenjano} />
            <Route path="/usponi/:id/" component={UsponDetails} />
            <Route path="/smjerovi/" component={Smjerovi} />
            <Route path="/moji-usponi/" component={MojiUsponi} />
            <Route path="/moji-partneri/" component={MojiPartneri} />
          </Grid>
        </Grid>
      </div>
      </BrowserRouter>
    );
}; 

export default App;

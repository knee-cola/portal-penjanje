import React from 'react';
import NavBar from './components/NavBar';
import { AppMenu } from './components/AppMenu';
import { ZadnjePenjano } from './activities/ZadnjePenjano';
import { BrowserRouter, Route } from 'react-router-dom';
import { MojiUsponi } from './activities/MojiUsponi';
import { MojiPartneri } from './activities/MojiPartneri';
import { Smjerovi } from './activities/Smjerovi';
import { UsponDetails } from './details/UsponDetails';
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
        <Grid container justify="center" style={{marginTop:65}}>
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

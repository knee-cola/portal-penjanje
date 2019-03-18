import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './navigation/NavBar';
import { AppMenu } from './navigation/AppMenu';
import { ZadnjePenjano } from './lists/ZadnjePenjano';
import { MojiUsponi } from './lists/MojiUsponi';
import { MojiPartneri } from './lists/MojiPartneri';
import { Smjerovi } from './lists/Smjerovi';
import UsponDetails from './details/UsponDetails';
import { Grid, Paper } from '@material-ui/core';
import UsponForm from './forms/UsponForm';

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
        <Grid container justify="center">
          <Grid item style={{width:'100%', maxWidth:400, paddingTop:40, paddingBottom: '1em', marginBottom: '1em'}} component={Paper} >
            <Route path="/" exact component={ZadnjePenjano} />
            <Route path="/novi-uspon/" exact component={UsponForm} />
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

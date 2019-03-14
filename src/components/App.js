import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Home from './Pages/Home';
import ChangeLog from './Pages/ChangeLog';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Trans } from "react-i18next";
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';

const App = () => {
  const [running, setState] = useState(false);
    <Header/>
  return (
    <React.Fragment>
      <Header/>
    <Route exact path="/" component={Home} />
    <Route path="/changelog" component={ChangeLog} />
      <div style={{ marginTop: 'auto', textAlign: 'center'}}>
        <Button variant="contained" color="primary" size="large" onClick={() => setState(!running)}>
          {running ? t('Pause') : t('Play')}
          {running ? <Pause style={{ marginLeft: 0 }} /> : <PlayArrow style={{ marginLeft: 0 }} />}
        </Button>
      </div>

      <Footer />
    </React.Fragment>
  )
}

export default App;
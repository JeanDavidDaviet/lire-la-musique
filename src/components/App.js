import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Home from './Pages/Home';
import ChangeLogEN from './Pages/ChangeLogEN';
import ChangeLogFR from './Pages/ChangeLogFR';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Button from '@material-ui/core/Button';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { useTranslation } from 'react-i18next';

const App = () => {
  const [running, setState] = useState(false);
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Header/>
      <Route exact path="/" render={() => <Home running={running} />}/>
      <Route path="/en/changelog" component={ChangeLogEN} />
      <Route path="/fr/changelog" component={ChangeLogFR} />
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
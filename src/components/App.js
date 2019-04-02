import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import ChangeLogEN from './Pages/ChangeLogEN';
import ChangeLogFR from './Pages/ChangeLogFR';
import Header from './Layout/Header';

const App = () => (
  <React.Fragment>
    <Header/>
    <Route exact path="/" component={Home} />
    <Route path="/chords/" render={(props) => <Home {...props} isChord={true} />} />
    <Route path="/en/changelog" component={ChangeLogEN} />
    <Route path="/fr/changelog" component={ChangeLogFR} />
  </React.Fragment>
)

export default App;
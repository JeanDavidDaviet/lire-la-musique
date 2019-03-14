import React from 'react';
import { Route } from "react-router-dom";
import Home from './Pages/Home';
import ChangeLog from './Pages/ChangeLog';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Trans } from "react-i18next";

const App = () => (
  <React.Fragment>
    <Header/>
    <Route exact path="/" component={Home} />
    <Route path="/changelog" component={ChangeLog} />

    <Footer />
  </React.Fragment>
)
export default App;
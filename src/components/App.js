import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './Pages/Home';
import ChangeLog from './Pages/ChangeLog';
import Header from './Layout/Header';
import i18n from "../i18n";
import { Trans } from "react-i18next";

const changeLanguage = lng => {
  i18n.changeLanguage(lng);
};

const App = ({ t, i18n }) => (
  <React.Fragment>
    <Trans>Scale</Trans>
    <Header i18n={i18n}/>
    <Route exact path="/" component={Home} />
    <Route path="/changelog" component={ChangeLog} />

    <img src="/assets/img/FR.png" onClick={() => changeLanguage("fr")}/>
    <img src="/assets/img/GB.png" onClick={() => changeLanguage("en")} />
  </React.Fragment>
)

export default App;
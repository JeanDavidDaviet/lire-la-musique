import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import ChangeLogEN from './Pages/ChangeLogEN';
import ChangeLogFR from './Pages/ChangeLogFR';
import Header from './Layout/Header';

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chords/:chord" element={<Home />} />
        <Route path="/en/changelog" element={<ChangeLogEN />} />
        <Route path="/fr/changelog" element={<ChangeLogFR />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
)

export default App;
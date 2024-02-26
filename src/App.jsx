import {Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import VignerePage from './pages/VigenerePage';
import ExtendedVignerePage from './pages/ExtendedVignerePage';
import PlayfairPage from './pages/PlayfairPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/vignere" Component={VignerePage} />
        <Route path="/extendedvignere" Component={ExtendedVignerePage} />
        <Route path="/playfair" Component={PlayfairPage} />
        <Route path="/product" Component={ProductPage} />
      </Routes>
    </div>
  );
}


export default App;

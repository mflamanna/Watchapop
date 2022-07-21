import React from 'react';
import SearchNavBar from './components/SearchNavBar';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <SearchNavBar/>
    <Footer/>
    </>
  );
}

export default App;

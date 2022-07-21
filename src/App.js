import React from 'react';
import ListWatch from './components/ListWatch';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
    <NavBar/>
    <ListWatch/>
    </>
  );
}

export default App;

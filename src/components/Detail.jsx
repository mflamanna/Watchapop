import React, {useState} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './NavBar';
import DetailMain from './DetailMain';

function detail (){
    return (
        <>
        <NavBar/>
        <DetailMain/>
        </>
        )
    }
    
export default detail;
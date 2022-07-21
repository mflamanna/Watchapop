import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from '../App';
import Detail from '../components/Detail';

function Router (){
return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/detail' element={<Detail/>} />
        </Routes>
    </BrowserRouter>
    )
}
export default Router;
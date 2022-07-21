import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from '../App';
import PageForm from '../pages/form';


function Router (){
return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/form' element={<PageForm/>} />

        </Routes>
    </BrowserRouter>
    )
}
export default Router;
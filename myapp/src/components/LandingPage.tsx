import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Register from "./Register";


 
const LandingPage=()=>{
    return (
    <div>
        Dummy testzz
        <BrowserRouter>
            <div>
                <Route path='/login' component={Login}/> 
                <Route path='/register' component={Register}/> 
            </div>
        </BrowserRouter>
        </div>
    )
}

export default LandingPage

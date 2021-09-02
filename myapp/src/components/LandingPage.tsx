import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';


 
const LandingPage=()=>{
    return (
    <div>
        Records loads here....
        {routes}
        </div>
    )
}

export default LandingPage



const routes =(
    <BrowserRouter>
    <div>
        <Route path='/login' component={Login}/> 
    </div>
    </BrowserRouter>

)
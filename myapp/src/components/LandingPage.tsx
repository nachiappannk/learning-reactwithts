import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import PageNotFound from "./PageNotFound";
import Register from "./Register";


 
const LandingPage=()=>{
    return (
    <div>
        Dummy testzz
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Register}/>
                <Route path='/login' component={Login}/> 
                <Route path='/register' component={Register}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default LandingPage

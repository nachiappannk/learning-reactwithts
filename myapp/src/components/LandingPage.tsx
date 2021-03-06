import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Login from './Login';
import PageNotFound from "./PageNotFound";
import Register from "./Register";
import Header from "./Header";
import UserDetails from "./UserDetails";
import FormDemo from "./FormDemo";
 
const LandingPage=()=>{
    return (
    <div>
        Dummy testzz
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/login' component={Login}/> 
                <Route path='/register' component={Register}/>
                <Route path='/' component={Register} exact={true}/>
                <Route path="/userdetails/:name?/:lastName?" component={UserDetails}/>
                <Route path="/form" component={FormDemo}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default LandingPage

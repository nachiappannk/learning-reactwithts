import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Login from './Login';
import PageNotFound from "./PageNotFound";
import Register from "./Register";

const Header = () =>{
    return (<header>
        <NavLink to="login">Login</NavLink>
        <NavLink to="register">Register</NavLink>
    </header>);
}
 
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
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default LandingPage

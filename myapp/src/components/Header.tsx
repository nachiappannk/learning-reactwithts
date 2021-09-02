import React from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';


function Header(){
    return (<header>
        <NavLink to="login">Loginx </NavLink>
        <NavLink to="register">Registerx </NavLink>
    </header>);
}

export default Header;
import React from "react";
import { NavLink, useParams } from "react-router-dom";

interface UserD {
    name:string;
    lastName: string;
}

const UserDetails = () => {
    const {name, lastName} = useParams<UserD>();

    return (<div>
        <div>Hi, welcome {name} and {lastName} </div>
        <NavLink to="/userdetails/a/b">goto</NavLink>
        </div>
        );
};

export default UserDetails;
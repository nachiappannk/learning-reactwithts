import React from "react";
import { useParams } from "react-router-dom";

interface UserD {
    name:string;
}

const UserDetails = () => {
    const {name} = useParams<UserD>();

    return (<div>Hi, welcome {name}</div>);
};

export default UserDetails;
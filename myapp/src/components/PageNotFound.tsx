import React from "react";
import { useLocation } from "react-router-dom";

const PageNotFound = () =>{
    const location = useLocation();
    return (<div>Page {location.pathname} is not found</div>);
};

export default PageNotFound
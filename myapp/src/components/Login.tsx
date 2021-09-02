import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = () => {

    const history = useHistory();

    const onClickButton = () =>{
        history.push('/register');
    };

    return (<div><div>
        this is the login page
    </div>
    <Button onClick={onClickButton}>Goto register</Button></div>);
};

export default Login;
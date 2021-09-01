import React, { useState } from "react";

const FormDemo = () =>{

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [city, setCity] = useState<string>();
    return (<form>
        <input type='text' className='form-control' placeholder='Name' value={name}  onChange={(e)=> setName(e.target.value)}/>  
        <input type='text' className='form-control' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type='password' className='form-control' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <input type='text' className='form-control' placeholder='City' value={city} onChange={(e)=> setCity(e.target.value)}/> 
       <button className='btn btn-success'>Submit</button>
       </form>);
}

export default FormDemo;
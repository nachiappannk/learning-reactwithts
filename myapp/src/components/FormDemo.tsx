import React, { useState } from "react";
import {useForm} from 'react-hook-form';

const FormDemo = () =>{

    const {register, handleSubmit, errors} = useForm<Profile>();


    const onSubmit=handleSubmit((data) =>{
        alert(JSON.stringify(data));
    });

    interface Profile {
        firstname: string
        lastname: string
        age: number
    }

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [city, setCity] = useState<string>();
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='firstname'>First Name</label>
                <input ref={register({required: true})} type ='text' id='firstname' name='firstname'/>
                {
                    errors.firstname && <div className="error">firstname is needed</div>
                }
            </div>
            <div>
                <label htmlFor='lasttname'>First Name</label>
                <input  ref={register} type ='text' id='lasttname' name='lasttname'/>
            </div>
            <div>
                <label htmlFor='age'>First Name</label>
                <input  ref={register} type ='text' id='age' name='age'/>
            </div>
            <div>
                <button type='submit'>Save User</button>
            </div>
        </form>
    );
}

export default FormDemo;
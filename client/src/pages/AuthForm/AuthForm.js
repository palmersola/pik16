import React, {useEffect, useState} from 'react';
import Register from './Register'
import Login from './Login'
import axios from "axios";
import data from "bootstrap/js/src/dom/data";

const AuthForm = ({user, setUser}) => {

     const [register, setRegister] = useState(true)
    const flipBool = () => {
        setRegister(!register)
        console.log(register)
    };

    return (
         <div>
            {register? <Register user={user} setUser={setUser}/>: <Login user={user} setUser={setUser}/>}
            <button onClick={flipBool}>{register?"Login":"Register"}</button>
         </div>
    )
}

export default AuthForm
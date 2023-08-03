import React, {useEffect, useState} from 'react';
import axios from "axios";
import data from "bootstrap/js/src/dom/data";

const AuthForm = ({user}) => {
    let register = true

    let userData

    const [formInput, setFormInput] = useState({
        userName: "",
        password: "",
        bio: "",
        profilePic: ""
    });

    const handleSubmit = async e => {
        e.preventDefault()

        axios.post('http://localhost:8080/api/user/register', formInput).then((res) => {
            console.log(res.data)
        });

    }

    const handleInputChange = e => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        });
    };

    return (
         <div>{register?
            <div id="register">
                <h3>Username</h3>
                    <input name="userName"
                           value={formInput.userName}
                           onChange={handleInputChange}
                           type="userName"
                           placeholder="Enter your username"
                    />
                <h3>Password</h3>
                    <input  name="password"
                            value={formInput.password}
                            onChange={handleInputChange}
                            type="password"
                            placeholder="Enter your password"
                    />
                <h3>First Name</h3>
                    <input name="firstName"
                           value={formInput.firstName}
                           onChange={handleInputChange}
                           type="firstName"
                           placeholder="Enter your First Name"
                    />
                <h3>Last Name</h3>
                    <input name="lastName"
                           value={formInput.lastName}
                           onChange={handleInputChange}
                           type="lastName"
                           placeholder="Enter your Last Name"
                    />
                <button onClick={handleSubmit}>Submit</button>

                {/*<div>{userData}</div>*/}
            </div>
            :
            <div id="login">
                <label htmlFor="">
                    Username
                    <input id="userName" type="text"/>
                </label>
                <label htmlFor="">
                    Password
                    <input id="password" type="text"/>
                </label>
            </div>
            }
         </div>
    )
}

export default AuthForm
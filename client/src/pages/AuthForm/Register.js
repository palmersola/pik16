import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Register = ({user, setUser}) => {
    let userData
    const navigate = useNavigate()

    const [formInput, setFormInput] = useState({
        userName: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    const handleSubmit = () => {
        axios.post('http://localhost:8080/api/user/register', formInput)
            .then((res) => {
                const userData = res.data;
                setUser(userData)
            })
            .then(() => navigate("/"))
    };

    const handleInputChange = e => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        });
    };


return (
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
    </div>
)
}

export default Register
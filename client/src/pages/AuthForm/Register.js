import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Register = ({setUser}) => {
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
    <form>
    <div id="register" className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input name="userName"
               className="form-control"
               value={formInput.userName}
               onChange={handleInputChange}
               type="userName"
               placeholder="Enter your username"
        />
        <label htmlFor="password" className="form-label">Password</label>
        <input  name="password"
                className="form-control"
                value={formInput.password}
                onChange={handleInputChange}
                type="password"
                placeholder="Enter your password"
        />
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input name="firstName"
               className="form-control"
               value={formInput.firstName}
               onChange={handleInputChange}
               type="firstName"
               placeholder="Enter your First Name"
        />
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input name="lastName"
               className="form-control"
               value={formInput.lastName}
               onChange={handleInputChange}
               type="lastName"
               placeholder="Enter your Last Name"
        />
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Register</button>
    </div>
        </form>
)
}

export default Register
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";


const Register = ({setUser, setShow}) => {
    const navigate = useNavigate()

    const [formInput, setFormInput] = useState({
        userName: "",
        password: "",
        firstName: "",
        lastName: ""
    });
    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/user/register', formInput)
            .then((res) => {
                const userData = res.data;
                console.log(userData);
                setUser(userData)
            })
            .then(() =>setShow(false))
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
        <Button onClick={handleSubmit} type="submit" className="btn mt-4 w-100 btn-primary">Register</Button>
    </div>
        </form>
)
}

export default Register
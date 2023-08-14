import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";


const Login = ({setUser, setShow}) => {
    let userData
    const navigate = useNavigate()

    const [formInput, setFormInput] = useState({
        userName: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/user/login', formInput)
            .then((res) => {
                const userData = res.data;
                console.log(userData);
                setUser(userData);
            })
            .then(()=> setShow(false))
            .then(()=> navigate("/"))
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
            <input name="userName" className="form-control"
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
            <Button onClick={handleSubmit} type="submit" className="btn btn-primary">Login</Button>
        </div>
        </form>
    )
}

export default Login
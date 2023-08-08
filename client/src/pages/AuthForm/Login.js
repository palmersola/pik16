import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";


const Login = ({setUser}) => {
    let userData
    const navigate = useNavigate()

    const [formInput, setFormInput] = useState({
        userName: "",
        password: "",
    });

    const handleSubmit = () => {
        axios.post('http://localhost:8080/api/user/login', formInput)
            .then((res) => {
                const userData = res.data;
                console.log(userData);
                setUser(userData);
                if (userData) navigate("/");
            });
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
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
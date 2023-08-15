import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import{updateLeague} from "./UserLeagues"

const CreateLeague = ({user, setKey}) => {
    const [leagueName, setLeagueName] = useState('');
    let username = !user? "Guest": user.userName;

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/api/league', {
                    leagueName: leagueName,
                    user: user
        })
            // .then(() => {
            //     setLeagueName('')
            //     setUser(user)
            // })
            .then(() => setKey('manager'))
            .catch(error => console.error('Error creating league:', error))

    };


    return (
        <div className="container mt-0 w-100 min-vh-100 bg-body">
            <h2>Create a New League</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="leagueName" className="form-label">
                        League Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="leagueName"
                        value={leagueName}
                        onChange={(e) => setLeagueName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Create League
                </button>
            </form>
        </div>
    );
};

export default CreateLeague;

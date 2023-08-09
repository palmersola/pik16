import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const LeagueForm = ({user, setUser}) => {
    const navigate = useNavigate()

    const [leagueName, setLeagueName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/league', {
                leagueName: leagueName,
                user: user
            });


            // Reset the form after successful submission
            setLeagueName('');
            setUser(user)
            navigate("/leagues")
        } catch (error) {
            console.error('Error creating league:', error);
        }
    };

    return (
        <div className="container mt-4">
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

export default LeagueForm;

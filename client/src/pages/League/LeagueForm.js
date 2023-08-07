import React, { useState } from 'react';
import axios from 'axios';

const LeagueForm = () => {
    const [leagueName, setLeagueName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/league', {
                leagueName: leagueName,
            });

            console.log('League created:', response.data);

            // Reset the form after successful submission
            setLeagueName('');
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

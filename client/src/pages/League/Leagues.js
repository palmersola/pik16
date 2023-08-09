import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Leagues = ({user, setLeagueId}) => {
    const [leagues, setLeagues] = useState([]);
    const navigate = useNavigate()

    const handleAddToLeague = (leagueId) => {
        setLeagueId(leagueId); // Set the selected league ID
        navigate('/'); // Navigate to the GameCard route
    };

    useEffect(() => {
        axios.get('http://localhost:8080/api/league').then((response) => {
            setLeagues(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Leagues</h2>
            <ul>
                {leagues.map((league) => (
                    <li key={league.id}>
                        <NavLink to={`/league/${league.leagueId}`}>{league.leagueName}</NavLink>
                        <button className="btn btn-primary" onClick={() => handleAddToLeague(league.leagueId)}>Add to League</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leagues;

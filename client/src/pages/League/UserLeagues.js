import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CreateLeague from "./CreateLeague";

const UserLeagues = ({user, setLeagueId}) => {
    const [leagues, setLeagues] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            axios.get(`http://localhost:8080/api/user/owned/${user.userId}`)
                .then(res => {
                    setLeagues(res.data)
                })
        }
    })

    const handleAddToLeague = (leagueId) => {
        setLeagueId(leagueId); // Set the selected league ID
        navigate('/game-card'); // Navigate to the GameCard route
    };

    return (
        <div>
            <h2>Leagues</h2>
            <ul>
                {leagues.map(league => (
                    <li key={league.id}>
                        <NavLink to={`/league/${league.leagueId}`}>{league.leagueName}</NavLink>
                        <button className="btn btn-primary" onClick={() => handleAddToLeague(league.leagueId)}>Edit League</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserLeagues;

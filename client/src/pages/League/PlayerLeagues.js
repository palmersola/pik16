import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
const PlayerLeagues = ({user, setLeagueId}) => {
    const [leagues, setLeagues] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            axios.get(`http://localhost:8080/api/user/playing/${user.userId}`)
                .then(res => {
                    setLeagues(res.data)
                })
        }
    },[])

    const handleAddToLeague = (e, leagueId) => {
        setLeagueId(leagueId); // Set the selected league ID
    };

    return (
        <div className="container mt-0 min-vh-100 bg-body">
            <h2>Player</h2>
            <ul>
                {leagues.map(league => (
                    <li key={league.id}>
                        <NavLink  to={`/league/${league.leagueId}`} onClick={() => handleAddToLeague(league.leagueId)}>{league.leagueName}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlayerLeagues;

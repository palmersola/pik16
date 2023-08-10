import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
const PlayerLeagues = ({user}) => {
    const [leagues, setLeagues] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            axios.get(`http://localhost:8080/api/user/playing/${user.userId}`)
                .then(res => {
                    setLeagues(res.data)
                })
        }
    })

    return (
        <div>
            <h2>Leagues</h2>
            <ul>
                {leagues.map(league => (
                    <li key={league.id}>
                        <NavLink to={`/league/${league.leagueId}`}>{league.leagueName}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlayerLeagues;

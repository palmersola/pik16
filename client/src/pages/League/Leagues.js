import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Leagues = ({user, setLeagueId}) => {
    const [leagues, setLeagues] = useState([]);

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
                        <button onClick={() => setLeagueId(league.leagueId)}>Add to League</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leagues;

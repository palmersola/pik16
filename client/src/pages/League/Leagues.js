import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Leagues = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/league').then((response) => {
            setLeagues(response.data);
        });
    }, []);

    console.log(leagues);

    return (
        <div>
            <h2>Leagues</h2>
            <ul>
                {leagues.map((league) => (
                    <li key={league.id}>
                        <NavLink to={`/league/${league.leagueId}`}>{league.leagueName}</NavLink>
                        <p>{league.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leagues;

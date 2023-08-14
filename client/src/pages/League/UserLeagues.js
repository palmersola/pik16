import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLeagues = ({user, setLeagueId}) => {
    const [leagues, setLeagues] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        if(user) {
            axios.get(`http://localhost:8080/api/user/owned/${user.userId}`)
                .then(res => {
                    setLeagues(res.data)
                })
        }
    }, [user])

    const handleAddToLeague = (leagueId) => {
        setLeagueId(leagueId); // Set the selected league ID
        navigate('/edit'); // Navigate to the GameCard route
    };

    return (
        <div className="container mt-0 min-vh-100 bg-body d-flex justify-content-center align-content-center">
            <ul>
                {leagues.map(league => (
                    <li key={league.id} style={{listStyleType:`none`}}>
                        <NavLink to={`/league/${league.leagueId}`} style={{fontSize:`30px`}}>{league.leagueName}</NavLink>
                        <button className="btn btn-primary m-2" onClick={() => handleAddToLeague(league.leagueId)}>Edit League</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserLeagues;

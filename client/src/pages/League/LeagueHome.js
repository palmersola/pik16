
import React, { useState } from 'react';
import Leagues from './Leagues';
import CreateLeague from './CreateLeague';
import {NavLink} from "react-router-dom";

const LeagueHome = ({ user, setLeagueId }) => {
    const [leagues, setLeagues] = useState([]);
    let username = !user? "Guest": user.userName

    return (
        <>
            <h2>{username}</h2>
            <NavLink to={'/create-league'}>Create League</NavLink>
            <Leagues user={user} setLeagueId={setLeagueId} leagues={leagues} />
        </>
    );
};

export default LeagueHome;

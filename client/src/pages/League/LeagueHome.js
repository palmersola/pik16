import React, { useState } from 'react';
import UserLeagues from './UserLeagues';
import CreateLeague from './CreateLeague';
import {NavLink} from "react-router-dom";
import PlayerLeagues from "./PlayerLeagues";

const LeagueHome = ({ user, setLeagueId }) => {
    const [leagues, setLeagues] = useState([]);
    let username = !user? "Guest": user.userName

    return (
        <>
            <h2>{username}</h2>
            <NavLink to={'/create-league'}>Create League</NavLink>
            <UserLeagues user={user} setLeagueId={setLeagueId} />
            <PlayerLeagues user={user} setLeagueId={setLeagueId} />
        </>
    );
};

export default LeagueHome;

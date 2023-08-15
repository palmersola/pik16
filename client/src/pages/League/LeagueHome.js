import React, { useState } from 'react';
import UserLeagues from './UserLeagues';
import CreateLeague from './CreateLeague';
import {NavLink} from "react-router-dom";
import PlayerLeagues from "./PlayerLeagues";
import {Tab, Tabs} from "react-bootstrap";
import './LeagueHome.css';

const LeagueHome = ({ user,  setLeagueId }) => {
    const [leagues, setLeagues] = useState([]);
    const [key, setKey] = useState('manager');
    let username = !user? "Guest": user.userName

    return (
        <div className="bg-body-secondary min-vw-100 ">
            <h2 id="userBanner" className="text-center mb-0 py-xl-5 py-md-1 ">Welcome {username}</h2>

            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                defaultActiveKey="manager"
                className="container mt-4 mb-0 h3   "
                justify
            >
                <Tab eventKey="manager" title="Manager">
                    <UserLeagues user={user} setLeagueId={setLeagueId} />
                </Tab>
                <Tab eventKey="player" title="Player">
                    <PlayerLeagues user={user} setLeagueId={setLeagueId} />
                </Tab>
                <Tab  eventKey="create" title="Create" >
                    <CreateLeague setKey={setKey} user={user}/>
                </Tab>
            </Tabs>
        </div>
    );
};

export default LeagueHome;

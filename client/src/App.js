import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Protect from "./components/Protect";
import GameCard from './pages/GameCard/GameCard';
import Header from './components/Header/header'
import AuthForm from "./pages/AuthForm/AuthForm";
import LeagueForm from "./pages/League/LeagueForm";
import Leagues from "./pages/League/Leagues";
import League from "./pages/League/League";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
    const [gamesArr, setGamesArr] = useState([]);
    const [user, setUser] = useState();
    const [selectedLeagueId, setSelectedLeagueId] = useState(null);

    return (
            <Router>
                <Protect user={user}>
                    <Header user={user} setUser={setUser}/>
                    <Routes>
                        <Route path={ "/"} element={<GameCard user={user} setUser={setUser} selectedLeagueId={selectedLeagueId} />}/>
                        <Route path={"/auth"} element={<AuthForm user={user} setUser={setUser}/>}/>
                        <Route path="/create-league" element={<LeagueForm user={user} setUser={setUser}/>} />
                        <Route path="/leagues" element={<Leagues user={user} setLeagueId={setSelectedLeagueId} />} />
                        <Route path="/league/:leagueId" element={<League />} />
                    </Routes>
                </Protect>
            </Router>
    );
};

export default App;

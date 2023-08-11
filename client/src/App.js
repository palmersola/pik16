import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Protect from "./components/Protect";
import GameCard from './pages/GameCard/GameCard';
import Header from './components/Header/Header'
import AuthForm from "./pages/AuthForm/AuthForm";
import CreateLeague from "./pages/League/CreateLeague";
import UserLeagues from "./pages/League/UserLeagues";
import League from "./pages/League/League";
import LeagueHome from "./pages/League/LeagueHome";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing/Landing";


const App = () => {
    const [gamesArr, setGamesArr] = useState([]);
    const [user, setUser] = useState();
    const [selectedLeagueId, setSelectedLeagueId] = useState(null);

    return (
            <Router>
                <Protect user={user}>
                    <Header user={user} setUser={setUser}/>
                    <Routes>
                        <Route path={"/auth"} element={<Landing user={user} setUser={setUser}/>}/>
                        <Route path={'/'} element={<LeagueHome user={user} selectedLeagueId={selectedLeagueId} setLeagueId={setSelectedLeagueId}/>}/>
                        <Route path={ "/game-card"} element={<GameCard user={user}  selectedLeagueId={selectedLeagueId} />}/>
                        <Route path={"/create-league"} element={<CreateLeague user={user} setUser={setUser}/>} />
                        {/*<Route path="/leagues" element={<Leagues user={user} setLeagueId={setSelectedLeagueId} />} />*/}
                        <Route path="/league/:leagueId" element={<League setLeagueId={setSelectedLeagueId}/>} />
                    </Routes>
                </Protect>
            </Router>
    );
};

export default App;

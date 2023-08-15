import React, {useState} from 'react';
import Protect from "./components/Protect";
import Header from './components/Header/Header'
import CreateLeague from "./pages/League/CreateLeague";
import Edit from "./pages/GameCard/Edit";
import League from "./pages/League/League";
import LeagueHome from "./pages/League/LeagueHome";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from "./pages/Landing/Landing";
import './App.css';
import Footer from "./components/Footer/Footer";

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
                    <Route path="/league/:leagueId" element={<League setLeagueId={setSelectedLeagueId}/>} />
                    <Route path={"/create-league"} element={<CreateLeague user={user} setUser={setUser}/>} />
                    <Route path={"/edit"} element={<Edit user={user}  selectedLeagueId={selectedLeagueId} />}/>
                    {/*<Route path={ "/game-card"} element={<GameCard user={user}  selectedLeagueId={selectedLeagueId} />}/>*/}
                    {/*<Route path="/leagues" element={<Leagues user={user} setLeagueId={setSelectedLeagueId} />} />*/}
                </Routes>
                <Footer/>
            </Protect>
        </Router>
    );
};

export default App;

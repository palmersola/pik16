import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [user, setUser] = useState([])


  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/football/games').then((response) => {
  //     setGamesArr(response.data);
  //   });
  // }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path={ "/"} element={<GameCard />}/>
                <Route path={"/auth"} element={<AuthForm user={user} />}/>
                <Route path="/create-league" element={<LeagueForm />} />
                <Route path="/leagues" element={<Leagues />} />
                <Route path="/league/:leagueId" element={<League />} />
            </Routes>
        </Router>
    );
};

export default App;

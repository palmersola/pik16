import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameCard from './pages/GameCard/GameCard';
import Header from './components/Header/header'

const App = () => {
  const [gamesArr, setGamesArr] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/football/games').then((response) => {
      setGamesArr(response.data);
    });
  }, []);

    return (
        <div>
            <Header />
            <div className="container mt-5">
                <h1>Game Feed</h1>
                <div className="row">
                  {gamesArr.map((game, index) => (
                      <div key={index} className="col-sm-6">
                        <GameCard game={game} />
                      </div>
                  ))}
                </div>
            </div>
        </div>
    );
};

export default App;

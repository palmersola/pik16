import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameCard from './pages/GameCard/GameCard';

const App = () => {
    const [gamesArr, setGamesArr] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/games').then((response) => {
            setGamesArr(response.data);
        });
    }, []);

    return (
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
    );
};

export default App;

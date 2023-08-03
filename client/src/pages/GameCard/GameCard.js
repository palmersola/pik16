// GameCard.js
import React, {useEffect, useState} from 'react';
import axios from "axios";

const GameCard = () => {
    const [gamesArr, setGamesArr] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/football/games').then((response) => {
            setGamesArr(response.data);
        });
    }, []);

    return (

        <div className="container mt-5">
            <h1>Game Feed</h1>
            <div className="row">
                {gamesArr.map((game, index) => (
                    <div key={index} id={game.game.id} className="card m-3 p-3 col-sm-5 d-flex flex-row justify-content-between align-items-center">
                        <div className="team-info text-center">
                            <img className="team-logo" src={game.away.logos[0]} alt="Away Team Logo" />
                            <h5 className="team-name">{game.away.school}</h5>
                        </div>
                        <div className="vs">vs</div>
                        <div className="team-info text-center">
                            <img className="team-logo" src={game.home.logos[0]} alt="Home Team Logo" />
                            <h5 className="team-name">{game.home.school}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameCard;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GameCard = ({user, setUser, selectedLeagueId}) => {
    const [gamesArr, setGamesArr] = useState([]);
    const [selectedGames, setSelectedGames] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:8080/api/football/games').then((response) => {
            setGamesArr(response.data);
        });
    }, []);

    const handleGameSelection = (gameId) => {
        console.log(user)
        if (selectedGames.includes(gameId)) {
            setSelectedGames(selectedGames.filter(id => id !== gameId));
        } else {
            if (selectedGames.length < 16) {
                setSelectedGames([...selectedGames, gameId]);
            }
        }
    };

    const handleAddGamesToLeague = () => {
        if (selectedLeagueId) {
            axios.post(`http://localhost:8080/api/league/add-games/${selectedLeagueId}`, { gameIds: selectedGames })
                .then(response => {
                    // Handle success, maybe show a success message
                    setSelectedGames([]); // Clear the selected games after adding to the league
                })
                .catch(error => {
                    // Handle error, maybe show an error message
                });
            navigate(`/league/${selectedLeagueId}`);
        } else {
            // Show an error message or alert if no league is selected
        }
    };


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
                        <div className="selection">
                            <input
                                type="checkbox"
                                checked={selectedGames.includes(game.game.id)}
                                onChange={() => handleGameSelection(game.game.id)}
                                disabled={selectedGames.length >= 16 && !selectedGames.includes(game.game.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="btn btn-primary mt-3"
                onClick={handleAddGamesToLeague}
                disabled={selectedGames.length !== 16}
            >
                Add Selected Games to League
            </button>


        </div>
    );
};

export default GameCard;

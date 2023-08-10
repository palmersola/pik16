import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from'react-router-dom';

const League = ({setLeagueId}) => {
    const navigate = useNavigate();
    const { leagueId } = useParams();
    const [league, setLeague] = useState({ leagueName: '', gamesArr: [] });
    const [games, setGames] = useState([]);
    const [leagueGames, setLeagueGames] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/league/${leagueId}`).then((response) => {
            setLeague(response.data);
        });
    }, [leagueId]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/football/games').then((response) => {
            setGames(response.data);
        });
    }, []);


    // Assuming leagues is an array of league objects with gamesArr
    // const selectedLeague = leagues.find(league => league.id === leagueId);

    useEffect(() => {
        // Filter games based on game IDs in the league's gamesArr
        const filteredLeagueGames = games.filter(game => league.gamesArr.includes(game.game.id));
        setLeagueGames(filteredLeagueGames);
    }, [games, league.gamesArr]);

    if (!league) {
        return <div>League not found.</div>;
    }

    return (
        <div className="container mt-5">
            <h1>{league.leagueName}</h1>
            <h2>Games</h2>
            <div className="row">
                {leagueGames.map((game) => (
                    <div
                        key={game.game.id}
                        id={game.game.id}
                        className="card m-3 p-3 col-sm-5 d-flex flex-row justify-content-between align-items-center"
                    >
                        <div className="team-info text-center">
                            <img className="team-logo" src={game.away.logos[0]} alt="Away Team Logo" />
                            <h5 className="team-name">{game.away.school}</h5>
                            <h5>{game.game.awayPoints}</h5>
                        </div>
                        <div className="vs">vs</div>
                        <div className="team-info text-center">
                            <img className="team-logo" src={game.home.logos[0]} alt="Home Team Logo" />
                            <h5 className="team-name">{game.home.school}</h5>
                            <h5>{game.game.homePoints}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default League;

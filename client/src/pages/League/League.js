import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from'react-router-dom';
import "../League/League.css";
import "../GameCard/GameCard.css";
import {Tab, Tabs} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const League = ({setLeagueId}) => {
    const navigate = useNavigate();
    const { leagueId } = useParams();
    const [league, setLeague] = useState({ leagueName: '', gamesArr: [] });
    const [games, setGames] = useState([]);
    const [leagueGames, setLeagueGames] = useState([]);
    const [key, setKey] = useState('games');
    const [checked, setChecked] = useState({
        0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null,
        8: null, 9: null, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null,
    }); // State to track checked input ID

    const handleCheckboxClick = async (e, check, index, flip) => {
        await setChecked({
            ...checked,
            [index]: check
        })
        const otherTeam = document.getElementById(flip);
        e.target.checked = true;
        otherTeam.checked = false;
    }

    const test = () => console.log(checked);

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

    useEffect(() => {
        // Filter games based on game IDs in the league's gamesArr
        const filteredLeagueGames = games.filter(game => league.gamesArr.includes(game.game.id));
        setLeagueGames(filteredLeagueGames);
    }, [games, league.gamesArr]);

    if (!league) {
        return <div>League not found.</div>;
    }

    return (
        <div className="bg-body-secondary min-vw-100 ">
            <h1 className="text-center mb-0 py-xl-5 py-md-1 ">{league.leagueName}</h1>

            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                defaultActiveKey="games"
                className="container mt-4 mb-0 h3"
                justify
            >
                <Tab eventKey="games" title="Games">
                    <div className="container mt-0 min-vh-100 bg-body d-flex flex-column align-items-center">
                        {leagueGames.map((game, index) => (
                            <div
                                key={game.game.id}
                                id={game.game.id}>
                                <div className="scoreboard-container">
                                    <div className="rectangle" style={{
                                        background: `linear-gradient(${index % 2 === 0 ? '135deg' : '45deg'}, ${game.away.color || 'white'} 50%, ${game.home.color || 'black'} 50%)`,
                                        border: `1px solid '#ccc'}`,}}>
                                        <input
                                            id={game.away.id}
                                            type="checkbox"
                                            className="d-flex "
                                            // checked={awayChecked}
                                            onChange={e => handleCheckboxClick(e, 0, index, game.home.id)}
                                        />
                                        <label for={game.away.id} className="team-side">
                                            <div className="team-info-A">
                                                <div className="logo">
                                                    <img src={game.away.logos[0]} alt="Away Team Logo" />
                                                </div>
                                            </div>
                                            <div className="team-score-A">
                                                <h3>{game.away.school}</h3>
                                                <h2>{game.game.awayPoints}</h2>
                                            </div>
                                        </label>
                                        <label for={game.home.id} className="team-side">
                                            <div className="team-info-B">
                                                <div className="logo">
                                                    <img src={game.home.logos[0]} alt="Home Team Logo" />
                                                </div>
                                            </div>
                                            <div className="team-score-B">
                                                <h3>{game.home.school}</h3>
                                                <h2>{game.game.homePoints}</h2>
                                            </div>
                                        </label>
                                        <input
                                            id={game.home.id}
                                            type="checkbox"
                                            className="d-flex"
                                            // checked={homeChecked}
                                            onChange={e => handleCheckboxClick(e, 1, index, game.away.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Button onClick={test} className="mb-3">Save</Button>
                    </div>
                </Tab>
                <Tab eventKey="players" title="Players">
                    <div className="container mt-0 min-vh-100 bg-body d-flex flex-column align-items-center">
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default League;

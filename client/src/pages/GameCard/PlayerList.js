import {useEffect, useState} from "react";
import axios from "axios";

const PlayerList = ({user, selectedLeagueId}) => {
    const [players, setPlayers] = useState([]);
    const[addPlayer, setAddPlayer] = useState({
        leagueId: "",
        playerId: ""
    });

    useEffect(() => {
        axios.get('http://localhost:8080/api/user/').then((response) => {
            setPlayers(response.data);
        });
        console.log(players)
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/league/addPlayer', {
            leagueId: selectedLeagueId,
            playerId: e.target.id
        })
            .then(res => {console.log(res)})
    }

    return (
        <div>
            {players.map(player => (
                 <button className="btn btn-primary" onClick={handleClick} id={player.player.playerId}>
                     {player.userName}
                 </button>
            ))}
        </div>
    );
}

export default PlayerList;

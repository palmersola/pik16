import {useEffect, useState} from "react";
import axios from "axios";

const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/user/').then((response) => {
            setPlayers(response.data);
        });
        console.log(players)
    }, []);

    return (
        <div>
            {players.map(player => (
                 <button className="btn btn-primary" id={player.player.playerId}>
                     {player.userName}
                 </button>
            ))}
        </div>
    );
}

export default PlayerList;

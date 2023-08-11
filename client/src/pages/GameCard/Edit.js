import GameCard from './GameCard'
import PlayerList from "./PlayerList";
import {useState} from "react";

const Edit = ({user, selectedLeagueId}) => {
    const [select, setSelect] = useState(true)

    return (
        <div>
            <button onClick={() => setSelect(true)}>Add Games</button>
            <button onClick={() => setSelect(false)}>Add Players</button>
            {select? <GameCard user={user} selectedLeagueId={selectedLeagueId}/> : <PlayerList user={user} selectedLeagueId={selectedLeagueId}/>}
        </div>
    )

}

export default Edit
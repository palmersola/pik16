import GameCard from './GameCard'
import PlayerList from "./PlayerList";
import {useState} from "react";

const Edit = ({user, selectedLeagueId}) => {
    const [select, setSelect] = useState(true)

    return (
        <div>
            <button className="btn btn-primary m-2" onClick={() => setSelect(true)}>Add Games</button>
            <button className="btn btn-primary" onClick={() => setSelect(false)}>Add Players</button>
            {select? <GameCard user={user} selectedLeagueId={selectedLeagueId}/> : <PlayerList user={user} selectedLeagueId={selectedLeagueId}/>}
        </div>
    )

}

export default Edit
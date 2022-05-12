import axios from "axios";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function OneGame() {
    const params = useParams()
    const [game, setGame] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:4001/onegame", {
            headers: {
                "content-type": "application/json",
                "x-access-token": sessionStorage.getItem("token")
            },
            params: params.id
        }).then(res => {
            setGame(res.data)
        })
    }, [game, params.id])

    function handleJoin(event) {
        const participants = game.participants
        if (participants.includes(sessionStorage.getItem("id"))) return alert("Vous êtes déjà inscrit.e")
        axios.post("http://localhost:4001/joingame", {
            participant: sessionStorage.getItem("id"),
        }, {
            headers: {
                "content-type": "application/json",
                "x-access-token": sessionStorage.getItem("token")
            },
            params: params.id
        }).then(res => {
            setGame(res.data)
        })
    }

    return (
        <div>
            {game ?
                <div key={game.titre}>
                    <h1>{game.titre}</h1>
                    <div>
                        {game.participants.map(participant => <h2 key={participant}>{participant}</h2>)}
                    </div>
                    <button onClick={handleJoin} className="btn-primary">Rejoindre la partie</button>
                </div>
                : <h1>LOADING</h1>}
        </div>
    )
}

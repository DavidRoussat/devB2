import axios from "axios";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function OneGame() {
    const params = useParams()
    const [game, setGame] = useState(null)
    const [isOwner, setIsOwner] = useState(false)
    const [scenario, setScenario] = useState("")
    useEffect(() => {
        axios.get("http://localhost:4001/onegame", {
            headers: {
                "content-type": "application/json",
                "x-access-token": sessionStorage.getItem("token")
            },
            params: params.id
        }).then(res => {
            setGame(res.data)
            if (game && game.participants[0] === sessionStorage.getItem("id")) setIsOwner(true)
        })
    }, [game, params.id])

    function handleJoin(event) {
        event.preventDefault()
        const participants = game.participants
        if (participants.includes(sessionStorage.getItem("id"))) return alert("Vous êtes déjà inscrit.e")
        if (sessionStorage.getItem("personnages") === "") return alert("Créer d'abord un personnage")
        axios.post("http://localhost:4001/joingame", {
            participant: sessionStorage.getItem("id"),
            personnage: JSON.parse(sessionStorage.getItem("personnages"))[event.target.elements.namedItem("perso").value]
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

    function handleScenario() {
        const request = {
            id: game._id,
            title: game.titre,
            numberOfPlayers: game.participants.length
        }
        Object.values(game.personnages).map((perso,index)=>{
            request[`personnage${index+1}`] = perso
        })
       axios.post("http://localhost:5000/post_json", request, {
           headers: {
               "content-type": "application/json",
           }}).then(() => {
           axios.get("http://localhost:5000/query-example", {
               headers: {
                   "content-type": "application/json",
               }
           }).then(res => {
               setScenario(res.data)
               axios.post("http://localhost:4001/addscenario", {
                   gameId: params.id,
                   scenario: scenario
               }, {
                   headers: {
                       "content-type": "application/json",
                       "x-access-token": sessionStorage.getItem("token")
                   }
               })
           })
       })
    }
console.log(scenario)
    return (
        <div>
            {game ?
                <div>
                    <form key={game.titre} onSubmit={handleJoin}>
                        <h1>{game.titre}</h1>
                        <div>
                            {game.participants.map(participant => <h2 key={participant}>{participant}</h2>)}
                        </div>
                        {sessionStorage.getItem("personnages") !== "" && <select name="perso" id="perso">
                            {Object.keys(JSON.parse(sessionStorage.getItem("personnages"))).map(p => <option key={p}
                                                                                                             value={p}>{p}</option>)}
                        </select>}
                        <button type="submit" className="btn btn-primary">Rejoindre la partie</button>
                    </form>
                    {isOwner &&
                        <button className="btn btn-secondary" onClick={handleScenario}> Générer un scénario</button>}
                    {scenario}
                </div>
                : <h1>LOADING</h1>}
        </div>
    )
}

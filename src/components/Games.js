import {useEffect, useState} from "react";
import axios from "axios";
import OneGame from "./OneGame";
import {Link} from "react-router-dom";

export default function Games() {
    const [games, setGames] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:4001/allgames", {
            headers: {
                "content-type": "application/json",
                "x-access-token": sessionStorage.getItem("token")
            }
        }).then(res => {
            setGames(res.data)
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        <div className="col-sm-6">
            {games ?
                games.map(game =>
                    <div key={game._id} className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{game.titre}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">{game.scenario}</p>
                            <Link to={game._id} className="card-link" component={<OneGame id={game._id}/>} >Card link</Link>
                        </div>
                    </div>
                )
                : <h1>LOADING</h1>}
        </div>
    )
}

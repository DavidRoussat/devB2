import {useEffect, useState} from "react";
import axios from "axios";
import OneGame from "./OneGame";
import {Link} from "react-router-dom";
import CreateGameForm from "./CreateGameForm";

export default function Games() {
    const [games, setGames] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [title, setTitle] = useState("")
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
    }, [games])

    function toggle() {
        setShowForm(!showForm)
    }

    function handleChange(event) {
        setTitle(event.target.value)
    }

    function handleCreate(event) {

        if (title === "" && showForm) return alert("Entrez un titre")

        axios.post("http://localhost:4001/creategame", {
            titre: title
        }, {
            headers: {
                "content-type": "application/json",
                "x-access-token": sessionStorage.getItem("token")
            }
        }).then(() => setShowForm(false))

    }

    return (
        <div className="col-sm-6">
            {games && !showForm &&
                games.map(game =>
                    <div key={game._id} className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{game.titre}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">{game.scenario}</p>
                            <Link to={game._id} className="card-link" component={<OneGame id={game._id}/>}>Rejoindre</Link>
                        </div>
                    </div>
                )
            }
            {!games && !showForm && <h1>LOADING</h1>}
            {!showForm && <button onClick={toggle} className="btn-primary" style={{marginTop: 20}}>Créer une partie</button>}
            {showForm && <CreateGameForm onClick={handleCreate} toggle={toggle} onChange={handleChange} value={title}/>}
        </div>
    )
}

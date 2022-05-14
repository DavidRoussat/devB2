import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Personnages() {
    const [perso, setPero] = useState({})
    useEffect(()=>{
        try {
            axios.get("http://localhost:4001/allperso", {headers: {
                    "content-type": "application/json",
                    "x-access-token": sessionStorage.getItem("token")
                }}
            )
                .then(res => {
                    setPero(res.data)
                    sessionStorage.setItem("personnages", JSON.stringify(perso))
                })
        } catch {
            window.location.href = "/sign-in"
        }
    }, [perso])

    return (
        <div>
            {perso ? Object.values(perso).map(p => <h1 key={p._id}>{p.nom}</h1>) : <h1>Pas perso</h1>}
            <Link className="btn-primary" to="/createperso" style={{textDecoration: "none"}}>Créer un personnage</Link>
        </div>)
}

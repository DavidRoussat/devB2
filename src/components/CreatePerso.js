import axios from "axios";

export default function CreatePerso() {
    async function handleSubmit(event) {
        event.preventDefault()
        await axios.post("http://10.0.1.10:4001/createperso", {
                perso: {
                    nom: event.target.elements.namedItem("nom").value,
                    race: event.target.elements.namedItem("race").value,
                    force: event.target.elements.namedItem("force").value,
                    dexterite: event.target.elements.namedItem("dexterite").value,
                    vigueur: event.target.elements.namedItem("vigueur").value,
                    charisme: event.target.elements.namedItem("charisme").value,
                    manipulation: event.target.elements.namedItem("manipulation").value,
                    apparence: event.target.elements.namedItem("apparence").value,
                    perception: event.target.elements.namedItem("perception").value,
                    intelligence: event.target.elements.namedItem("intelligence").value,
                    astuce: event.target.elements.namedItem("astuce").value,
                    melee: event.target.elements.namedItem("melee").value,
                    survie: event.target.elements.namedItem("survie").value,
                    furtivite: event.target.elements.namedItem("furtivite").value,
                    intimidation: event.target.elements.namedItem("intimidation").value,
                    commandement: event.target.elements.namedItem("commandement").value,
                    vigilance: event.target.elements.namedItem("vigilance").value
                }

        }, {headers: {
                "content-type": "application/json",
                "x-access-token": sessionStorage.getItem("token")
            }}).then(()=> window.location.href= "/personnages")
    }

    return (
        <form onSubmit={handleSubmit} style={{paddingTop: "30%"}}>
            <div className="mb-3">
                <label>Nom du perso</label><br/>
                <input name="nom" className="form-control"/>
            </div>
            <label htmlFor="races">Race du perso:</label>
            <select className="form-control" id="races" name="race">
                <option value="homidé">homidé</option>
                <option value="lupus">lupus</option>
                <option value="métis">métis</option>
            </select>
            <div className="mb-">
                <label>Attributs</label><br/>
                <label htmlFor={"force"}>Force</label>
                <input name="force" key="force" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"dexterite"}>Dexterite</label>
                <input name="dexterite" key="dexterite" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"vigueur"}>Vigueur</label>
                <input name="vigueur" key="vigueur" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"charisme"}>Charisme</label>
                <input name="charisme" key="charisme" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"manipulation"}>Manipulation</label>
                <input name="manipulation" key="manipulation" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"apparence"}>Apparence</label>
                <input name="apparence" key="apparence" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"perception"}>Perception</label>
                <input name="perception" key="perception" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"intelligence"}>Intelligence</label>
                <input name="intelligence" key="intelligence" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"astuce"}>Astuce</label>
                <input name="astuce" key="astuce" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
            </div>
            <br/>
            <div className="mb-">
                <label>Capacités</label><br/>
                <label htmlFor={"melee"}>Mêlée</label>
                <input name="melee" key="melee" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"survie"}>Survie</label>
                <input name="survie" key="survie" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"furtivite"}>Furtivite</label>
                <input name="furtivite" key="furtivite" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"intimidation"}>Intimidation</label>
                <input name="intimidation" key="intimidation" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"commandement"}>Commandement</label>
                <input name="commandement" key="commandement" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"manipulation"}>Manipulation</label>
                <input name="manipulation" key="manipulation" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
                <label htmlFor={"vigilance"}>Vigilance</label>
                <input name="vigilance" key="vigilance" type="range" min="1" max="5" step="1" defaultValue="1"
                       style={{marginLeft: ".4rem"}}/><br/>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Créer
                </button>
            </div>
        </form>
    )
}

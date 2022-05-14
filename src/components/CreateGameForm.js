export default function CreateGameForm(props) {
    return (
        <div>
            <h1>Créer une partie</h1>
            <input type="text" value={props.value} onChange={props.onChange}/>
            <button onClick={props.onClick} className="btn-primary">Créer une partie</button>
            <button onClick={props.toggle} className="btn-danger">Revenir en arrière</button>
        </div>

    )
}

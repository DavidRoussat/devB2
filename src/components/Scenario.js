import axios from "axios";


export function Scenario() {
    function getScenario() {
        axios.get("/getscenario").then(res => res.body)
    }

    return (<div>get scenario</div>)
}

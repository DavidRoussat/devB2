import axios from "axios";

export async function isAuthentificated() {
    return await axios.post("http://localhost:4001/welcome", {}, {
        headers: {"x-access-token": sessionStorage.getItem("token")}
    })
}

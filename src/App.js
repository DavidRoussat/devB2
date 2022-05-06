import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";

export default function App() {
    return (
        <div style={{background: "#1C8EF9", paddingLeft: "30%", paddingRight: "30%", paddingTop: "10%", minHeight:"100vh"}}>
            <div style={{minWidth: "350px", background: "white", padding: "40px 55px 45px 55px", borderRadius: "15px"}}>
                <Login />
            </div>
        </div>

    );
}


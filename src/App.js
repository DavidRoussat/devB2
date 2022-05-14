import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {isAuthentificated} from "./handlers/checkAuthHandler";
import {Logout} from "./components/Logout";
import Personnages from "./components/Personnages";
import CreatePerso from "./components/CreatePerso";
import Games from "./components/Games";
import OneGame from "./components/OneGame";

export default function App() {
    const [isConnected, setIsConnected] = useState(null)

    async function logged() {
        if (!sessionStorage.getItem("token")) return setIsConnected(false)
        try {
            await isAuthentificated().then(() => {
                setIsConnected(true)
            })
        } catch (e) {
            console.log(e)
            setIsConnected(false)
        }

    }

    useEffect(() => {
        logged()
    }, [])

    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={'/'}>
                            SUPERSITEDEOUF
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    {isConnected ? <Link className="nav-link" to={"/logout"}>Logout</Link> :
                                        <Link className="nav-link" to={'/sign-in'}>
                                            Login
                                        </Link>}
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/sign-up'}>
                                        Sign up
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/personnages"}>Personnages</Link>
                                </li>
                                <li className="nav-item" >
                                    <Link className="nav-link" to={"/games"}>Rejoindre une partie</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Routes>
                            <Route exact path="/" element={<HomePage/>}/>
                            <Route path="/sign-in" element={<Login/>}/>
                            <Route path="/sign-up" element={<SignUp/>}/>
                            <Route path="/logout" element={<Logout/>}/>
                            <Route path="/personnages" element={<Personnages/>}/>
                            <Route path="/createperso" element={<CreatePerso/>}/>
                            <Route path="/games/*" element={<Games/>} />
                            <Route path="games/:id" element={<OneGame/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
)
}


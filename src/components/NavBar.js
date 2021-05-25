import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../App.css'

export default function NavBar(props) {
    
    const [
        login,
        signup
        ] = props;

    return(
        <div>
            <nav className = 'nav-container'>
                <h1>Anywhere Fitness</h1>
                <div className = 'nav-links'>
                    <Link clasName = 'nav-button' to = {login}>Login</Link>
                    <Link clasName = 'nav-button' to = {signup}>Sign up</Link>
                </div>
            </nav>
        </div>
    )
}
import "./header.css"
import { NavLink } from "react-router-dom";

function header () {
    return (
        <header>
            <h1>Pik16</h1>
            <NavLink to="/" >
                <button>GameCard</button>
            </NavLink>
            <NavLink to="/auth" >
                <button>Login</button>
            </NavLink>
        </header>
    )
}

export default header
import { NavLink } from "react-router-dom";
import './header.css';

function Header({user, setUser}) {
    const signOut = () => {
        setUser(null)
    }

    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">Pik16</h1>
                <nav className="nav">
                    <NavLink to="/" className="nav-link">
                        GameCard
                    </NavLink>
                    <NavLink to="/auth" className="nav-link">
                        Login
                    </NavLink>
                    <NavLink to="/create-league" className="nav-link">
                        Create League
                    </NavLink>
                    <NavLink to="/leagues" className="nav-link">
                        Leagues
                    </NavLink>
                    <NavLink to="/auth" className="nav-link" onClick={signOut}>
                        Logout
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
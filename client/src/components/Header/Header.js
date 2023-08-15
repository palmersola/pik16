import { NavLink } from "react-router-dom";
import './header.css';

function Header({user, setUser}) {

    const signOut = () => {
        setUser(null)
    }

    return (
        <header className="header navbar navbar-expand-lg navbar-light bg-light custom-bg-color text-white">
            <div className="container">
                <h1 className="logo" href="#">PIK16</h1>
                <nav className="nav navbar-brand">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink to="/" className="nav-link text-white">
                                    Home
                                </NavLink>
                                {/*{user?*/}
                            </li>
                            <li className="nav-item">
                                <NavLink to="/auth" className="nav-link text-white">
                                    Login
                                </NavLink>
                                {/*:*/}
                            </li>
                            <li className="nav-item">
                                <NavLink to="/auth" className="nav-link text-white" onClick={signOut}>
                                    Logout
                                </NavLink>
                                {/*}*/}
                            </li>
                            <li className="nav-item">
                                {/*<NavLink to="/create-league" className="nav-link">*/}
                                {/*    Create League*/}
                                {/*</NavLink>*/}
                                {/*<NavLink to="/leagues" className="nav-link">*/}
                                {/*    Leagues*/}
                                {/*</NavLink>*/}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
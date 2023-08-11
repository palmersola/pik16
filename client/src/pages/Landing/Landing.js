import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import Register from "../AuthForm/Register";
import Login from "../AuthForm/Login";

const Landing = ({user, setUser}) => {
    const [register, setRegister] = useState(true)
    const flipBool = () => {
        setRegister(!register)
        console.log(register)
    };

    return (

        <div>
            {/* navbar */}
            {/*<nav className="navbar navbar-expand-lg bg-body-tertiary">*/}
            {/*    <nav className="navbar navbar-expand-lg bg-body-tertiary">*/}
            {/*        <div className="container-fluid">*/}
            {/*            <a className="navbar-brand" href="#">PIK16</a>*/}
            {/*            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
            {/*                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"*/}
            {/*                    aria-label="Toggle navigation">*/}
            {/*                <span className="navbar-toggler-icon"></span>*/}
            {/*            </button>*/}
            {/*            <div className="collapse navbar-collapse" id="navbarNav">*/}
            {/*                <ul className="navbar-nav">*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a className="nav-link active" aria-current="page" href="#">Home</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a className="nav-link" href="#">Features</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a className="nav-link" href="#">Pricing</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</nav>*/}

            {/* header */}
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">COLLEGE FOOTBALL <br /> IS ALMOST HERE</h1>
                    <p className="col-md-8 fs-4">Join hundreds in the Pik16 community. the pik16 pick em’
                        is the best way to enjoy the season. Join a league, pick
                        your games, and spend time doing what you enjoy,
                        watching football.</p>
                </div>

                {/* modal */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Login to your PIK16
                                    Account!</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {register? <Register user={user} setUser={setUser}/>: <Login user={user} setUser={setUser}/>}
                                <button onClick={flipBool}>{register?"Login":"Register"}</button>
                                {/*<form>*/}
                                {/*    <div className="mb-3">*/}
                                {/*        <label htmlFor="username" className="form-label">Username</label>*/}
                                {/*        <input type="text" className="form-control" id="username"*/}
                                {/*               placeholder="Enter your username"></input>*/}
                                {/*    </div>*/}
                                {/*    <div className="mb-3">*/}
                                {/*        <label htmlFor="password" className="form-label">Password</label>*/}
                                {/*        <input type="password" className="form-control" id="password"*/}
                                {/*               placeholder="Enter your password"></input>*/}
                                {/*    </div>*/}
                                {/*    <button type="submit" className="btn btn-primary">Login</button>*/}
                                {/*</form>*/}
                                {/*<h5 className="mt-3">Don't have an account? <a href="#" data-bs-toggle="modal"*/}
                                {/*                                               data-bs-target="#signupModal">Create one*/}
                                {/*    here!</a></h5>*/}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*/!* signup modal *!/*/}
                {/*<div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel"*/}
                {/*     aria-hidden="true">*/}
                {/*    <div className="modal-dialog">*/}
                {/*        <div className="modal-content">*/}
                {/*            <div className="modal-header">*/}
                {/*                <h1 className="modal-title fs-5" id="signupModalLabel">Create Your PIK16 Account</h1>*/}
                {/*                <button type="button" className="btn-close" data-bs-dismiss="modal"*/}
                {/*                        aria-label="Close"></button>*/}
                {/*            </div>*/}
                {/*            <div className="modal-body">*/}
                {/*                /!* signup modal content *!/*/}
                {/*            </div>*/}
                {/*            <div className="modal-footer">*/}
                {/*                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close*/}
                {/*                </button>*/}
                {/*                <button type="button" className="btn btn-primary">Sign Up</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            <footer className="footer mt-auto py-3">
                <div className="container">
                    <span className="text-muted">Copyright PIK16 2023</span>
                </div>
            </footer>

            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>

        </div>
        </div>
    );
};

export default Landing;

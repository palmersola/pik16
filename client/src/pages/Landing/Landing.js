import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'animate.css/animate.min.css';
import Register from "../AuthForm/Register";
import Login from "../AuthForm/Login";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../Landing/Landing.css"

const Landing = ({user, setUser}) => {
    const [register, setRegister] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const flipBool = () => {
        console.log("click")
        setRegister(!register)
        console.log(register)
    };

    return (
        <div className="home-page">
            <div className="overlay">
                <div className="hero-text">
                    <h1>COLLEGE FOOTBALL IS ALMOST HERE</h1>
                    <p>
                        Join hundreds in the Pik16 community. The Pik16 pick em’ is the best way to enjoy the season. Join a league, pick your games, and spend time doing what you enjoy, watching football. Click below to continue.
                    </p>
                    <Button variant="primary" onClick={handleShow} style={{ color: 'white' }}>
                        Get to Pikin'
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Get to Pikin'</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {register ? <Register setUser={setUser} setShow={setShow} /> : <Login setUser={setUser} setShow={setShow} />}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="button" className="w-100 " variant="secondary" onClick={flipBool}>
                                {register ? "Veteran?" : "Rookie?"}
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
};
            export default Landing;
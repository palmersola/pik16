import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'animate.css/animate.min.css';
import Register from "../AuthForm/Register";
import Login from "../AuthForm/Login";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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

        <div>
            {/* header */}
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">COLLEGE FOOTBALL <br /> IS ALMOST HERE</h1>
                    <p className="col-md-8 fs-4">Join hundreds in the Pik16 community. the pik16 pick em’
                        is the best way to enjoy the season. Join a league, pick
                        your games, and spend time doing what you enjoy,
                        watching football. Click below to continue</p>
                    <>
                        <Button variant="primary" onClick={handleShow}>
                            Get to Pikin'
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Get to Pikin'</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {register? <Register setUser={setUser} setShow={setShow}/>: <Login setUser={setUser} setShow={setShow}/>}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button type="button" className="w-100 " variant="secondary" onClick={flipBool}>{register?"Veteran?":"Rookie?"}</Button>
                                {/*<Button variant="secondary" onClick={handleClose}>*/}
                                {/*    Close*/}
                                {/*</Button>*/}
                                {/*<Button variant="primary" onClick={handleClose}>*/}
                                {/*    Save Changes*/}
                                {/*</Button>*/}
                            </Modal.Footer>
                        </Modal>
                    </>
                 </div>
             </div>

         </div>
    );
};

export default Landing;

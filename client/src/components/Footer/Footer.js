import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <Container fluid className="bg-dark text-white p-4 footer">
                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>
                            "Pik16 is a thrilling web application that transforms a 15-year family tradition of picking favored college football teams into a competitive, user-friendly platform. Join or create groups to challenge friends and family for glory, while experiencing the joy and camaraderie of college football. "
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Contact</h5>
                        <p>
                            Address: Somewhere in Minnesota Ave<br />
                            Phone: (123) 456-7890<br />
                            Email: pik16@gmail.com
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <p>
                            <a href="#" className="text-white">Facebook</a><br />
                            <a href="#" className="text-white">Twitter</a><br />
                            <a href="#" className="text-white">Instagram</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
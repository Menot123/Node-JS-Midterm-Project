import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
    return (
        <Col md={12} className="d-flex flex-direction-column align-items-center justify-content-center home__bg">
            <div>
                <h1 className="mt-5">Cùng nhau chia sẻ những khoảnh khắc tuyệt vời</h1>
                <p>Website trò chuyện kết nối cả thế giới</p>
                <LinkContainer to="/chat">
                    <Button variant="success">
                        Bắt Đầu Chat <i className="fas fa-comments home-message-icon"></i>
                    </Button>
                </LinkContainer>
            </div>
        </Col>
    );
}

export default Home;

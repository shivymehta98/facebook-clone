import React from 'react';
import Home from './components/home';
import Login from './components/login';
// import './components/home-style.css';
import { Container, Row, Col } from 'react-bootstrap';

export default () => (
  <div className='app-container'>
    <Container>
      <Row>
        <Col lg={7}>
          <Home />
        </Col>
        <Col lg={5}>
          <Login /> 
        </Col>
      </Row>
    </Container>
  </div>
);
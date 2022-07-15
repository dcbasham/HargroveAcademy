import React from 'react';
import Container from 'react-bootstrap/Container';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Navbar } from './NavBar';
import { ToastContainer } from 'react-bootstrap';
export const Home = () => {
  return (
    <Container fluid="xxl" className="bg-dark h-100 d-inline-block w-100 p-3">
      <Col lg="true">
        <Image
          fluid
          src="https://media.istockphoto.com/photos/group-of-students-walking-in-college-campus-after-classes-picture-id1165677324?k=20&m=1165677324&s=612x612&w=0&h=dgiT--qntxVIeqkCSivKoxKObyMsJ_Gl4IMqjK7TU7I="
        />

        <p style={{ color: 'white' }}>
          {' '}
          Welcome to Hargrove Academy of Javascript
        </p>
      </Col>
    </Container>
  );
};

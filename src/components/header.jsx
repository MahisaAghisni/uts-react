import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand as={Link} to="/">
          MAJU Store
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
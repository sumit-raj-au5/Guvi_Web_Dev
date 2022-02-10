import React from 'react';
import {Navbar, Container} from "react-bootstrap";
import logo from "./logo.png";

function header() {
  return (
  <Navbar bg="dark" variant="light">
  <Container>
    <Navbar.Brand href="#home">
      <img
        alt="Home Brand"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    <h4 className='d-inline-block ' style={{color:"white"}}>Todo List</h4>
    </Navbar.Brand>
  </Container>
</Navbar>);
}

export default header;

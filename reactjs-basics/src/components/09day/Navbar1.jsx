import React from 'react'
import { Container,Navbar ,Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navbar1 = () => {
  return (
   <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'  style={({ isActive}) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "yellow" : "white"          };
        }}>Home</Nav.Link>
            <Nav.Link  as={NavLink} to='/register'  style={({ isActive}) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "yellow" : "white"          };
        }}>Form</Nav.Link>
            <Nav.Link   as={NavLink} to='/products'  style={({ isActive}) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "yellow" : "white"          };
        }}>Products</Nav.Link>
            <Nav.Link   as={NavLink} to='/validations'  style={({ isActive}) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "yellow" : "white"          };
        }}>Validations</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#features">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   </>
  )
}

export default Navbar1

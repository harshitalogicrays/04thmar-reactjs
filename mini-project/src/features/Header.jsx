import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaLock, FaPen, FaShoppingCart } from 'react-icons/fa';
import { FaCircleArrowLeft } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">mini project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={NavLink} to='/'  style={({ isActive}) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "yellow" : "white"          };
        }}>Home</Nav.Link>
            <Nav.Link  as={NavLink} to='/products'  style={({ isActive}) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "yellow" : "white"          };
        }}>Products</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#home"><FaShoppingCart size={30}/>
            <span class="badge rounded-pill text-bg-danger">0</span >           
          </Nav.Link>
            <Nav.Link  as={NavLink} to='/register'  style={({ isActive}) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "yellow" : "white"          };
        }}><FaPen/> SignUp</Nav.Link>
            <Nav.Link  as={NavLink} to='/login'  style={({ isActive}) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "yellow" : "white"          };
        }}><FaLock/> SignIn</Nav.Link>
            <Nav.Link href="#home">Welcome User</Nav.Link>
            <Nav.Link href="#home"><FaCircleArrowLeft/> Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header

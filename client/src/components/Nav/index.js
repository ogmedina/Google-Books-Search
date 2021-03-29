import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function Navigation() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      {/* Add google font to brand */}
    <Navbar.Brand href="/">Google Books</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/search">Search</Nav.Link>
      <Nav.Link href="/saved">Saved</Nav.Link>      
    </Nav>
    </Navbar>
    </>
  );
}

export default Navigation;
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { render } from "react-dom";
import { Router, Routes, Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

import About from "./About";
import BookRent from "./BookRent";
import BookRequest from "./BookRequest";
import Contact from "./Contact";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Sidebar
      </Button>

      <Offcanvas id="offcanvas-menu" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <h1>
            <Badge bg="secondary">Sidebar</Badge>
          </h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to="/about">About</Link>
          <br></br>
          <Link to="/rent-a-book">Rent a Book</Link>
          <br></br>
          <Link to="/request-a-book">Request a Book</Link>
          <br></br>
          <Link to="/contact">Contact</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;

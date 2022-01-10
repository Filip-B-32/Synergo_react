import React from "react";
import { Badge } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <h1>
        <Badge bg="secondary">Contact</Badge>
      </h1>
      <br></br>

      <div>
        <h2>Rădulea Denis</h2>
        <p>+40 767 052 778</p>
        <p>raduleadenis@yahoo.com</p>
      </div>
      <br></br>
      <div>
        <h2>Filip Bogdan</h2>
        <p>+40 722 025 654</p>
        <p>bfilip32@yahoo.com</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h2 className="footer-h2">SYNERGO GROUP</h2>  
        <p className="footer-p">The Exchange Tower, PO Box 427, 130 King Street West, Suite 1800, Toronto,
        Ontario M5X 1E3, Canada</p> 
        <p className="footer-p">(647) 560-4412</p>
      </div>
    </div>
  );
}

export default Contact;

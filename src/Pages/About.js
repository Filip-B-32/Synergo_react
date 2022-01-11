import { Button } from "bootstrap";
import React from "react";
import { Badge } from "react-bootstrap";
import image1 from "../images/featured_on_upcity.png";
import image2 from "../images/TOG_member.png";
import image3 from "../images/top-software-development-companies.png";
import image4 from "../images/verified-software-supplier.png";

function About() {
  return (
    <div>
      <h1>
        <Badge bg="secondary">About</Badge>
      </h1>
      <br></br>
      <div>
        <p>
          The website/web application was developed to assisst users with their
          book requests, where they can easily request new books from the
          comfort of their home. We also have a section for the available books
          at the moment on the left panel called "Books". <br></br>
        </p>
        <p>
          To order a book, you just need to click the button to the right of the
          book. To make it easier. we also have the name of the book, the
          author, the book ID in case you want to search for it that way, and
          the year, if no further changed were implemented, because the website
          is still in development, we want to provide what's best for you
          everyday, so we are updating it quite often. <br></br>
        </p>
        <p>
          Any change to the website will be added to this section as fast as
          possible. If for any reason your order did not go through, we also
          have a contact section where you have the names of the people in
          charge, their phone numbers, e-mails and other contact forms that
          might suit you better, the program being a 9 to 5 from Monday to
          Friday, Eastern European Time. We thank you for choosing us and we
          hope you'll like this modern way of purchasing/borrowing books, we
          believe it's more accesible to everybody, with just a few click away.
        </p>
      </div>
      <br></br>
      <div>
        <img className="img-about" src={image1}/>
        <img className="img-about" src={image2} />
        <img className="img-about" src={image3} />
        <img className="img-about" src={image4} />
      </div>
    </div>
  );
}

export default About;

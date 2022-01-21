import React from "react";
import { Button } from "react-bootstrap";
import { Badge } from "react-bootstrap";

import image1 from "../images/Factfulness - Hans Rosling.jpg";
import image2 from "../images/Psychology - Lela Gibson.jpg";
import image3 from "../images/Python - Anthony Brun.jpg";
import image4 from "../images/The C++ Programing Language - Bjarne Stroustrup.jpg";
import image5 from "../images/The Power of Habit - Charles Duhigg.jpg";
function Main() {
  return (
    <div>
      <h1>
        <Badge bg="secondary">Home Page</Badge>
      </h1>
      <br></br>
      <div>
        <img className="img-main" src={image1}/><br></br>
        <img className="img-main" src={image2} /><br></br>
        <img className="img-main" src={image3} /><br></br>
        <img className="img-main" src={image4} /><br></br>
        <img className="img-main" src={image5} /><br></br>
      </div>
    </div>
  );
}

export default Main;

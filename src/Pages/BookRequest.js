import React from "react";
import { Form } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import modalShow from "react-bootstrap/Modal";
import setModalShow from "react-bootstrap/Modal";

function BookRequest() {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Rented</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>The book you selected was successfully requested!</h4>
          <br></br>
          <p>
            Thank you for requesting the book. You will shortly get a
            confirmation on your email.<br></br>
            Enjoy reading.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div id="ReqForm">
      <Form>
        <h1>
          <Badge bg="secondary">Request a Book</Badge>
        </h1>
        <br></br>
        <Form.Group className="mb-3" controlId="formBasicBookName">
          <Form.Label>Book Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Book Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter Author" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Choose Date</Form.Label>
          <Form.Control type="date" aria-describedby="dateHelpBlock" />
          <Form.Text id="dateHelpBlock" muted>
            Select today's date, please!
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          onClick={() => setModalShow(true)}
        >
          Request
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Form>
    </div>
  );
}

export default BookRequest;

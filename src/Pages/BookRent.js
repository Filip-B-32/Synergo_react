import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Modal } from "react-bootstrap";
import modalShow from "react-bootstrap/Modal";
import setModalShow from "react-bootstrap/Modal";

function BookRent() {
  const [modalShow, setModalShow] = React.useState(false);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((json) => setBooks(json.books))
      .catch((err) => console.log(err));
  }, []);

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
          <h4>
           The book you selected was successfully rented!
          </h4>
          <br></br>
          <p>
            Thank you for renting the book. You will shortly get a confirmation
            on your email.<br></br>
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
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>
            <Badge bg="secondary">Rent a book</Badge>
          </h1>
          <br></br>
          {books?.length > 0 ? (
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Date added</th>
                </tr>
              </thead>
              <tbody>
                {books.map(({ id, name, author, date }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{author}</td>
                    <td>{date}</td>
                    <td>
                      <Button
                        type="submit"
                        variant="outline-success"
                        onClick={() => setModalShow(true)}
                      >
                        Rent
                      </Button>

                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No books</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookRent;

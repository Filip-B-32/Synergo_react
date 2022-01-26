import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";


function BookRent() {
  const [books, setBooks] = useState(false);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((json) => setBooks(json.books))
      .catch((err) => console.log(err));
  }, []);

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
                {books.map(({ id, name, author,date }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{author}</td>
                    <td>{date}</td>
                    <td>
                      <Button variant="outline-success">Rent</Button>
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

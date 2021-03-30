import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Container from "react-bootstrap/Container";
import { List, ListItem } from "../components/List";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function Saved() {
    //Setting the saved list initial state
    const [books, setBooks] = useState([])

    //Load all books on page load and store them
    useEffect(() => {
        loadBooks()
    }, [])

    //Loads all books and sets them to books from inital state
    function loadBooks() {
        API.getBooks()
        .then(res =>
            setBooks(res.data)
        )
        .catch(err => console.log(err));
    };
    
    //Function to delete book by id number, MongoDB has id identified by an underscore before it
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    };

    return (
        <>
        <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <h5>Saved List</h5>
        </Jumbotron>
        <Container fluid>            
            <Row className="results">
            <Col>
                {books.length ? (
                    <List>
                        {books.map(book => (
                            <ListItem key={book._id}>
                                <h5>{book.title}</h5>
                                 by {book.authors}
                                <br />
                                <br />
                            <Button id={book.id} className = "deletebook"
                                onClick={() => deleteBook(book._id)} variant="danger">DELETE</Button>
                            <a href={book.link} target="_blank" rel="noopener noreferrer"><Button className="viewinfo" variant="info">View</Button></a>
                            <Row>
                            <Col>
                            <img src={book.image} alt="savedbook"></img>
                            </Col>
                            <Col xs={8}>
                            {book.description}
                            </Col>
                            </Row>
                            </ListItem>
                        ))}
                    </List>
                ): (
                    <h4>Nothing Saved!</h4>
                )}
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Saved;
import React, { useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import Container from "react-bootstrap/Container";
import { List, ListItem } from "../components/List";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"



function Books() {
    //Component's inital state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})
    
    //Function for the form submit button, searches the API through the googleSearch Route and 
    //takes in the object typed from the form, then saves the response in the setBooks
    function handleFormSubmit(event) {
        event.preventDefault();
        API.googleSearch(formObject.searchbook)
        .then(res => {
            setBooks(res.data.items)
            console.log(res.data.items)
        })
        .catch(error => {
            console.log(error.response)
        })
    };

    //Function for the save button will take in the the data and save to the api route for saveBook
    function saveButton(id, title, author, description, image, link) {
        console.log(id, title, author, description, image, link);
         API.saveBook({
            id: id,
            title: title,
            authors: author,
            description: description,
            image: image,
            link: link
        })        
        .catch(err => console.log(err))
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    return (
        <>        
             
        <Container> 
        <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <h5>Search for and Save Books of Interest</h5>
        </Jumbotron>       
        <Container className="booksearch">
        <Row className="booksearchheader">
            <Col >
            <h4><i className="fas fa-book"></i> Book Search</h4>
            <br />
            </Col>
        </Row>
        <Row>
            <Col>
            <br />
            <h6>Book</h6>
                <form>
                <Input
                    onChange={handleInputChange}
                    name="searchbook"
                    placeholder="Name of Book"
                    />
                    <FormBtn 
                    disabled={!(formObject.searchbook)}
                    onClick={handleFormSubmit}
                    >Search Book</FormBtn>
                </form>
            </Col>
        </Row>
        </Container>
        <br />
        <Container className="results">        
        <Row className="resultsheader">            
            <Col>
            <h4><i className="fas fa-poll"></i> Results</h4>
            </Col>
        </Row>
        <Row>
            <Col>
        {books.length ? ( 
        <List>
            {books.map(book => (
                <ListItem key={book.id}>                    
                    <h5>{book.volumeInfo.title}</h5>                     
                     by {book.volumeInfo.authors}
                    <br />
                    <br />
                    <Button className="saveinfo"
                            onClick={() => saveButton(
                            book.id, book.volumeInfo.title, book.volumeInfo.authors, book.volumeInfo.description, book.volumeInfo.imageLinks.thumbnail, book.volumeInfo.previewLink)}
                            variant="primary">Save
                    </Button>
                    <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer"><Button className="viewinfo" variant="info">View</Button></a>
                    <Row>
                    <Col>                        
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="searchedbook"></img>                      
                    </Col>
                    <Col xs={8}>
                      {book.volumeInfo.description}
                    </Col>                    
                    </Row>
                </ListItem>
            ))}
        </List>
        ) : ( 
            <h5>Search For A Book To Begin!</h5>
        )}
        </Col>
        </Row>
        </Container>
        </Container>
        </>
    )
}

export default Books;

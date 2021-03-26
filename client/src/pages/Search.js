import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";


function Books() {
    //component's inital state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    //Load all books 
    useEffect(() => {
        loadBooks()
    }, [])

    //Load all books from GoogleAPI and set them to books
    function loadBooks() {
        API.googleSearch()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    //function to delete book
    function deleteBook(id) {
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        loadBooks();
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    return (
        <>
        
        <h1>Test</h1>
        </>
    )


}

export default Books;

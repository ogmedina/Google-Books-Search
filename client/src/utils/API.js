import axios from "axios";

export default {    
    //Get all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    //Get book with the given id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
     //Google Search
     googleSearch: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + query)
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
    },
    //Deletes book
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }    
};
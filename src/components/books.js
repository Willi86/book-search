/*import React, { useState, useEffect } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          `https://openlibrary.org/search.json?title=${query}`
        );
        setBooks(res.data.docs);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.key}>
              <h3>{book.title}</h3>
              <p>Author(s): {book.author_name.join(", ")}</p>
              <p>First Publish Year: {book.first_publish_year}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Books;
*/


//import './App.css';
import { useEffect, useState } from "react";
import BookResults from "./BookResults";



function Books() {
  const [query, setQuery] = useState(""); // this will take user search 
  const [doc, setDocs] = useState([]);//declaring variables (film) and assigning its value using react hook)
  const [filteredDoc, setFilteredDocs] = useState([]);//Here it stores filtered search(films) from user search
  const [searched, setSearched] = useState(false); // here i'm setting the initial value of searched to (false) which means no search results before button clicked

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?title=react")
      .then((response) => response.json())
      .then((docs) => {
        setDocs(docs.docs);
      });
  }, []);

  // Updates Film when the form is submitted
  const handleSearch = (eventSub) => { //declaring a function with eventSub
    eventSub.preventDefault(); // Prevent the page reloading
    const filtered = doc.filter((item) =>// new array (filtered) to take elements filtered from the 'film' array
      item.title.toLowerCase().includes(query.toLowerCase()) // this to ignore uppercase letters 
    );
    setFilteredDocs(filtered);
    setSearched(true); // Set searched to true when the form is submitted
  };

  return (
    <div className="app">
      <form className='search-Box' onSubmit={handleSearch}> {/* Here it calls handleSearch on submission       */}
        <input
          className="search-Field"
          placeholder="Search for Books..."
          onChange={(eventSub) => setQuery(eventSub.target.value)} required
        /> {/*  required : to prevent user from submitting an empty search.
              onchange is triggered on chnages and uppdates setQuery which will update query in the app function 
        */}
        <button className='search-Btn' type="submit">Search</button>
      </form>
    
      {/* Render the table only if the search button is clicked and there are search results */}
      {searched && filteredDoc.length > 0 && <BookResults doc={filteredDoc} />}
      {searched && filteredDoc.length === 0 && <section> <img class="Img" alt="Not found- image" src="/Notfound.png" /> </section>}
      
       
      
    </div>
  );
}

export default Books;

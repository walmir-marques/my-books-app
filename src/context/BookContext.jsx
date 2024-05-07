import React, { useCallback, useEffect, useState } from "react";

const URL = "https://openlibrary.org/search.json?title=";
const BookContext = React.createContext();

const BookProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the lord of the ring");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((singleBook) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = singleBook;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title,
          };
        });

        setBooks(newBooks);

        if (newBooks.length > 1) {
          setResultTitle("Your Search Result !!!");
        } else {
          setResultTitle("No Search Result Found !!!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found !!!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <BookContext.Provider
      value={{ loading, books, setSearchTerm, resultTitle, setResultTitle }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default { BookProvider, BookContext };

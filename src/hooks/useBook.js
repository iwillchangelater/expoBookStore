import react, { useState, useEffect } from "react";
import axios from "axios";

export default (bookid) => {
  const [book, setbook] = useState(null);
  const getBook = async (id) => {
    const result = await axios.get(
      `http://192.168.0.103:8000/api/v1/books/${id}`
    );
    setbook(result.data.data);
    console.log(result.data.data);
  };
  useEffect(() => {
    getBook(bookid);
  }, []);
  return book;
};

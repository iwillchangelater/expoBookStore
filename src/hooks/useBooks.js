import react, { useState, useEffect } from "react";
import axios from "axios";
export default (categoryId, searchText) => {
  const [books, setbooks] = useState([]);

  const chechErrorMessage = (message) => {
    console.log("error===========>", message);
  };
  useEffect(() => {
    let limit = 3;
    let search = "";
    if (searchText) {
      limit = 50;
      search = `&search=${search}`;
    } else {
      limit = 3;
      search = "";
    }
    axios
      .get(
        `http://192.168.0.103:8000/api/v1/categories/${categoryId}/books?limit=${limit}${search}`
      )
      .then((res) => {
        setbooks(res.data.data);
      })
      .catch((err) => chechErrorMessage(err.message));
  }, [searchText, categoryId]);
  const getBook = (searchText) => {
    if (searchText) {
      axios
        .get(
          `http://192.168.0.103:8000/api/v1/${categoryId}/books?search=${searchText}`
        )
        .then((res) => setbooks(res.data.data))
        .catch((err) => {
          chechErrorMessage(err.message);
        });
    } else {
    }
  };
  return [books];
};

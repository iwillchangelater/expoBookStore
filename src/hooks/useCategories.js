import react, { useState, useEffect } from "react";
import axios from "axios";
export default () => {
  const [categories, setCategories] = useState([]);
  const [errorMessage, seterrorMessage] = useState(null);
  useEffect(() => {
    getInitData();
  }, []);

  const searchCategory = () => {};
  const chechErrorMessage = (message) => {
    console.log("error===========>", message);
    switch (message) {
      case "Request failed with status 404":
        seterrorMessage("Хайсан өгөгдөл алга байна.");
        break;
      case "Network Error":
        seterrorMessage("Интернэт холболтод алдаа гарлаа.");
        break;

      default:
        seterrorMessage("Алдаа гарлаа түр хүлээгээд дахин орлдоно уу.");
        break;
    }
  };
  const getInitData = () => {
    // local host = cmd ipconfig
    axios
      .get("http://192.168.0.103:8000/api/v1/categories")
      .then((res) => {
        setCategories(res.data.data);
        seterrorMessage(null);
      })
      .catch((err) => chechErrorMessage(err.message));
  };
  return [categories, errorMessage, searchCategory];
};

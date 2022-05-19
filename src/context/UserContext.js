import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

export const UserStore = (props) => {
  const AsyncStorage = useAsyncStorage();
  useEffect(() => {}, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [username, setUsername] = useState(null);
  const [email, setemail] = useState(null);
  const [token, settoken] = useState(null);
  const [role, setrole] = useState(null);
  const [error, seterror] = useState(null);
  const login = async (username, password) => {
    console.log("login  start");
    axios
      .post(`http://192.168.0.103:8000/api/v1/users/login`, {
        email: username,
        password: password,
      })
      .then((res) => {
        AsyncStorage.setItem("token", res.data.token);
        setIsLoggedIn(true);
        seterror(null);
        settoken(res.data.token);
        setemail(res.data.email);
        setUsername(res.data.name);
        setrole(res.data.role);
        console.log("login end");
      })
      .catch((err) => {
        seterror(err);
        console.log(err);
      });
  };
  const signup = (userName, email, password1) => {
    axios
      .post("http://192.168.0.103:8000/api/v1/users/register", {
        name: userName,
        email: email,
        password: password1,
        role: "admin",
      })
      .then((res) => {
        AsyncStorage.setItem("token", res.data.token).then((err) => {
          console.log((res) => "token hadgalagdlaa");
          AsyncStorage.getItem("token").then((res) =>
            console.log("token=" + res)
          );
        });
        props.navigation.navigate("Home");
      })
      .catch((err) => {
        setError("1");
        console.log(err);
      });
  };

  const data = {
    isLoggedIn,
    setIsLoggedIn,
    token,
    settoken,
    login,
    signup,
    isLoading,
    setisLoading,
  };
  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
};

export default UserContext;

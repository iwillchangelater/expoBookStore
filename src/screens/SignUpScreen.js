import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const SignUpScreen = (props) => {
  const state = useContext(UserContext);
  const [password1, setPassword1] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState(null);
  const SignUpHandler = () => {
    if (password1 != password2) {
      setError("1");
    } else {
      setError(null);
      state.signup(userName, email, password1);
    }
  };
  return (
    <View>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={require("../../assets/logo.png")}
      />
      <Text>Fill Information</Text>
      {error && <Text style={{ color: "red", fontSize: 20 }}>Error</Text>}
      <TextInput
        style={styles.input}
        placeholder={"User Name"}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder={"Email"}
        onChangeText={setEmail}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder={"Password"}
        onChangeText={setPassword1}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder={"Password Repeat"}
        onChangeText={setPassword2}
      />
      <Button title={"Sign Up"} onPress={SignUpHandler} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    margin: 10,
    paddingBottom: 1,
    padding: 10,
  },
});

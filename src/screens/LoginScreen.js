import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../context/UserContext";

const SignUpScreen = (props) => {
  const state = useContext(UserContext);
  const [password1, setPassword1] = useState("12345678");
  const [email, setEmail] = useState("jagaaa@gmail.com");
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   AsyncStorage.getItem("token").then((res) => {
  //     console.log(res);
  //     props.navigation.navigate("Home");
  //   });
  // }, []);
  useEffect(() => {
    if (state.isLoggedIn) props.navigation.navigate("Home");
  }, [state.isLoggedIn]);
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
        placeholder={"Email"}
        onChangeText={setEmail}
        value={""} // olon udaa bichhees zalhuuraw
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder={"Password"}
        onChangeText={setPassword1}
        value={""}
      />
      <Button title={"Login"} onPress={() => state.login(email, password1)} />
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

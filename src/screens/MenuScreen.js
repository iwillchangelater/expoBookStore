import { StyleSheet, Text, View, Button } from "react-native";
import React, { useContext } from "react";
import UserContext from "../context/UserContext";
const MenuScreen = ({ navigation }) => {
  const state = useContext(UserContext);
  return (
    <View>
      <Button
        title="home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      {/* <Button title="Detail" onPress={() => navigation.navigate("Detail")} /> */}
      <Button
        title="signup"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
      <Button
        title="login"
        onPress={() => {
          navigation.navigate("LogIn");
        }}
      />
      <Button
        title="logout"
        onPress={() => {
          state.setIsLoggedIn(false);
        }}
      />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});

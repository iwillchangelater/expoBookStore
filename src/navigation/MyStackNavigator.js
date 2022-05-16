import { StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Button } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import BookScreenDetails from "../screens/BookScreenDetails";
import MenuScreen from "../screens/MenuScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import UserContext from "../context/UserContext";
import SplashScreen from "../screens/SplashScreen";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default () => {
  const Stack = createNativeStackNavigator();
  const userState = useContext(UserContext);
  const AsyncStorage = useAsyncStorage();
  if (userState.isLoading === true) {
    return <SplashScreen />;
  }
  console.log(AsyncStorage);
  useEffect(() => {
    let temp;
    AsyncStorage.getItem("token")
      .then((res) => {
        temp = JSON.parse(res);
        console.log(res);
        if (temp !== null) state.setIsLoading(True);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle: { backgroundColor: "#3498DB" },
        headerTintColor: "white",
        headerTitleStyle: { fontSize: 22 },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Amazon номын дэлгүүр",
          headerRight: () => (
            <Button
              title="Menu"
              onPress={() => navigation.navigate("Detail", {})}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ title: "Demo Menu" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "SignUp" }}
      />
      <Stack.Screen
        name="LogIn"
        component={LoginScreen}
        options={{ title: "Log in" }}
      />
      <Stack.Screen
        name="Detail"
        component={BookScreenDetails}
        options={{ title: "Amazon номын дэлгүүр" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

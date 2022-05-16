import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStackNavigator from "./src/navigation/MyStackNavigator";
import { UserStore } from "./src/context/UserContext";
function App() {
  return (
    <NavigationContainer>
      <UserStore>
        <MyStackNavigator />
      </UserStore>
    </NavigationContainer>
  );
}

export default App;
// 67 splash delgest

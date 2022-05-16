import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <ActivityIndicator size={"large"} color="grey" />
      <Text style={{ alignSelf: "center", fontSize: 30, paddingTop: 20 }}>
        Wait a little ****
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});

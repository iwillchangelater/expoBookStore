import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";

const MyHeaderButton = (props) => {
  return (
    <HeaderButton
      IconComponent={Feather}
      iconSize={25}
      color="white"
      {...props}
    />
  );
};

export default MyHeaderButton;

const styles = StyleSheet.create({});

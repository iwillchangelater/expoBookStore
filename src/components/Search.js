import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const Search = (props) => {
  return (
    <View style={styles.searchPanel}>
      <TextInput
        style={styles.textinput}
        placeholder="Хайлтын түлхүүр"
        placeholderTextColor="white"
        autoCapitalize="none"
        onChangeText={props.fun}
        onEndEditing={() => props.searchFun()}
      ></TextInput>
      <TouchableOpacity onPress={() => props.searchFun()}>
        <FontAwesome
          name="search"
          size={35}
          color="#535C68"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchPanel: {
    backgroundColor: "#abb3ba",
    top: 5,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 7,
    flexDirection: "row",
  },
  textinput: {
    color: "white",
    flex: 1,
    paddingLeft: 10,
  },
  icon: { alignSelf: "center", marginHorizontal: 5 },
});

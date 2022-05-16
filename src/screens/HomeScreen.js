import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MyHeaderButton from "../components/MyHeaderButton";
import Search from "../components/Search";
import useCategories from "../hooks/useCategories";
import CategoriesBookList from "../components/CategoriesBookList";

const HomeScreen = ({ navigation }) => {
  const [localSearchText, setlocalSearchText] = useState("");
  const [serverSearchText, setserverSearchText] = useState("");
  const [categories, errorMessage, searchCategory] = useCategories();

  const searchFun = () => {
    setserverSearchText(localSearchText);
    console.log("hailt hiij ehellee");
  };
  // deerees orj irsen navigation nii options iig over write hiiih
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item title="Menu" iconName="menu" onPress={() => alert("search")} />
        </HeaderButtons>
      ),
    });
  }, [navigation, localSearchText]);

  return (
    <View style={{ marginBottom: 70 }}>
      <Search
        fun={setlocalSearchText}
        val={localSearchText}
        searchFun={searchFun}
      />
      {localSearchText ? (
        <Text style={styles.searchText}>Хайсан утга: {localSearchText}</Text>
      ) : null}
      {errorMessage && <Text styles={styles.error}>{errorMessage}</Text>}
      <ScrollView style={{ top: 10 }}>
        {categories.map((e) => (
          <View key={e.name} style={styles.categories}>
            <CategoriesBookList
              data={e}
              localSearchText={localSearchText}
              serverSearchText={serverSearchText}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchText: { top: 10, marginHorizontal: 20, marginBottom: 10 },
  categories: {
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  error: { margin: 20, color: "red", fontSize: 150 },
});

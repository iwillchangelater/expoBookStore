import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Feather } from "@expo/vector-icons";

import useBook from "../hooks/useBook";

// header transparent bwal expo blure ashiglaj bolno transparent bolchuul absolute bolj zai ezlehee bolidog
const BookScreenDetails = (props) => {
  if (!props.route.params.book) {
    return null;
  }
  const { id } = props.route.params.book;
  const book = useBook(id);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <Feather name="menu" size={24} color="white" />,
    });
  }, [props.navigation]);
  if (!book) {
    return null;
  }
  return (
    <View>
      <ScrollView style={{ paddingHorizontal: 20 }} overScrollMode={"always"}>
        <Image
          source={{
            uri: "https://data.internom.mn/media/images/" + book.photo,
          }}
          style={styles.image}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 10 }}>
          {book.name}
        </Text>
        <Text>{book.content}</Text>
        <Text>{book.content}</Text>
        <Text>{book.content}</Text>
        <Button onPress={props.navigation.goBack} title={"back"} />
      </ScrollView>
    </View>
  );
};

export default BookScreenDetails;

const styles = StyleSheet.create({
  image: { width: 300, height: 400, alignSelf: "center" },
});

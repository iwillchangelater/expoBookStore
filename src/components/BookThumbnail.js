import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import thousandify from "thousandify";
import { useNavigation } from "@react-navigation/native";
const BookThumbnail = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.BookThumbnail}
      onPress={() => navigation.navigate("Detail", { book: props.data })}
    >
      <View>
        <Image
          source={{
            uri: "https://data.internom.mn/media/images/" + props.data.photo,
          }}
          style={styles.image}
        />
        <Text style={styles.name}>{props.data.name}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bold}>{thousandify(props.data.price) + "₮"}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.bold}>{props.data.rating}</Text>
          <AntDesign name="star" size={20} color="#FDCC0D" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookThumbnail;

const styles = StyleSheet.create({
  image: { height: 300, width: 200 },
  BookThumbnail: { padding: 10, width: 210, justifyContent: "space-between" },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  name: {
    fontSize: 13,
    marginTop: 10,
  },
  bold: { fontWeight: "bold" },
});

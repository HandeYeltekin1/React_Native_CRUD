import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Context as BlogContext } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />

      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          // console.log(item.id);
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.titles}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Entypo name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 2,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: "black",
  },
});
export default IndexScreen;

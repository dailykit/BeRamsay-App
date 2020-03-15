import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { Layout, styled } from "@ui-kitten/components";
import Text from "../../components/TextComponent";
import * as ImagePicker from "expo-image-picker";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import BottomDrawer from "rn-bottom-drawer";

import { height, width } from "../../constants/Layout";

const AddPost = ({ navigation, ...restProps }) => {
  navigation.setOptions({
    title: "Add Post",
    headerStatusBarHeight: 0,
    headerLeft: () => (
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={{ height: 20 }}
          source={require("../../assets/back.png")}
        />
      </TouchableOpacity>
    )
  });

  const [isDownArrowVisible, setIsDownArrowVisible] = useState(1);
  const [isUpArrowVisible, setisUpArrowVisible] = useState(0);
  const [downArrowContainer, setDownArrowContainer] = useState(50);
  const [value, onChangeText] = useState("");

  useEffect(() => {}, []);

  return (
    <Layout style={styles.container}>
      <TextInput
        multiline
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.textInput}
        placeholder={"Speak your hearts out!"}
        placeholderTextColor="#000"
      />
      <BottomDrawer
        onCollapsed={() => {
          setIsDownArrowVisible(0);
          setisUpArrowVisible(1);
          setDownArrowContainer(50);
        }}
        onExpanded={() => {
          setIsDownArrowVisible(1);
          setisUpArrowVisible(0);
          setDownArrowContainer(50);
        }}
        containerHeight={450}
        offset={100}
        startUp={true}
      >
        <Layout style={styles.contentContainer}>
          <Layout
            style={[
              styles.row,
              styles.down,
              {
                height: downArrowContainer
              }
            ]}
          >
            <Feather
              style={[
                styles.icons,
                {
                  opacity: isDownArrowVisible,
                  display: isDownArrowVisible == 0 ? "none" : "flex"
                }
              ]}
              size={20}
              name="arrow-down"
            />
            <Feather
              style={[
                styles.icons,
                {
                  opacity: isUpArrowVisible,
                  display: isUpArrowVisible == 0 ? "none" : "flex"
                }
              ]}
              size={20}
              name="arrow-up"
            />
          </Layout>
          <Layout style={styles.row}>
            <TouchableOpacity style={[styles.button, styles.uploadButton]}>
              <Feather style={styles.icons} size={20} name="camera" />
              <Text style={styles.text}>Add a Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.uploadButton]}>
              <Feather style={styles.icons} size={20} name="play-circle" />
              <Text style={styles.text}>Add a Video</Text>
            </TouchableOpacity>
          </Layout>
          <Layout style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Feather style={styles.icons} size={20} name="plus" />
              <Text style={styles.text}>Add to Existing Post</Text>
            </TouchableOpacity>
          </Layout>
          <Layout style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Feather style={styles.icons} size={20} name="tag" />
              <Text style={styles.text}>Tag a Recipe</Text>
            </TouchableOpacity>
          </Layout>
          <Layout style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Feather style={styles.icons} size={20} name="tag" />
              <Text style={styles.text}>Tag a Restaurant</Text>
            </TouchableOpacity>
          </Layout>
          <Layout style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Feather style={styles.icons} size={20} name="video" />
              <Text style={styles.text}>Start a Live Video</Text>
            </TouchableOpacity>
          </Layout>
          <Layout style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons
                style={styles.icons}
                size={20}
                name="poll"
              />
              <Text style={styles.text}>Start a Poll</Text>
            </TouchableOpacity>
          </Layout>
          <Layout style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons
                style={styles.icons}
                size={20}
                name="food"
              />
              <Text style={styles.text}>Invite to Dine</Text>
            </TouchableOpacity>
          </Layout>
        </Layout>
      </BottomDrawer>
    </Layout>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f1f1f1" },
  contentContainer: {
    flex: 1
  },
  row: {
    height: 50,
    flexDirection: "row"
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    flex: 1
  },
  uploadButton: {
    flex: 1,
    flexDirection: "row"
  },
  text: {
    opacity: 0.6
  },
  icons: {
    opacity: 0.6
  },
  down: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    height: 50
  },
  textInput: {
    padding: 10
  }
});

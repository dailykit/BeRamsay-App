import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Layout } from "@ui-kitten/components";
import Text from "../../components/TextComponent";
import * as ImagePicker from "expo-image-picker";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import BottomDrawer from "rn-bottom-drawer";
import * as Permissions from "expo-permissions";
import { Video } from "expo-av";

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
  const [imageURI, setImageURI] = useState(null);
  const [videoURI, setvideoURI] = useState(null);
  const [value, onChangeText] = useState("");

  useEffect(() => {}, []);

  const getPermissionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return false;
    } else {
      return true;
    }
  };

  const _pickImage = async () => {
    if (getPermissionAsync()) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1
      });

      if (!result.cancelled) {
        setImageURI(result.uri);
      }
    }
  };

  const _pickVideo = async () => {
    if (getPermissionAsync()) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        quality: 1
      });

      if (!result.cancelled) {
        setvideoURI(result.uri);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
          containerHeight={550}
          offset={100}
          startUp={true}
        >
          <Layout style={styles.contentContainer}>
            {(imageURI || videoURI) && (
              <Layout style={[styles.row, styles.imageRow]}>
                {imageURI && (
                  <Image style={styles.image} source={{ uri: imageURI }} />
                )}
                {videoURI && (
                  <Video
                    source={{ uri: videoURI }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={true}
                    resizeMode="cover"
                    style={styles.image}
                    useNativeControls
                  />
                )}
              </Layout>
            )}
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
              <TouchableOpacity
                onPress={() => _pickImage()}
                style={[styles.button, styles.uploadButton]}
              >
                <Feather style={styles.icons} size={20} name="camera" />
                <Text style={styles.text}>Add a Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => _pickVideo()}
                style={[styles.button, styles.uploadButton]}
              >
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
    </TouchableWithoutFeedback>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
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
    padding: 20
  },
  image: {
    height: "auto",
    width: 80,
    marginRight: 20,
    borderRadius: 5
  },
  imageRow: {
    padding: 10,
    height: 100,
    backgroundColor: "#f9f9f9"
  }
});

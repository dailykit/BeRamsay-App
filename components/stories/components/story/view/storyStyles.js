import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  storyListContainer: {},
  modal: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    flex: 1,
    marginTop: -100,
    zIndex: 99999999
  }
});
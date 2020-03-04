import React from "react";
import { StyleSheet } from "react-native";

import Text from "../../../components/TextComponent";

const TextPost = props => {
  let {
    data: {
      data: { text }
    }
  } = props;
  return <Text style={styles.text}>{text}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "gray"
  }
});

export default TextPost;

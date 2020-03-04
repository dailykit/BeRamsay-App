import React from "react";
import { StyleSheet, Image } from "react-native";
import { Layout } from "@ui-kitten/components";

import Text from "../../../components/TextComponent";

import { height, width } from "../../../constants/Layout";

const TextPost = props => {
  let {
    data: {
      data: { src, desc }
    }
  } = props;
  return (
    <Layout>
      <Text style={styles.text}>{desc}</Text>
      <Image source={src} style={styles.image} />
    </Layout>
  );
};
const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.7,
    marginLeft: -20
  },
  text: {
    fontSize: 14,
    color: "gray"
  }
});

export default TextPost;

import React, { useState } from "react";
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Layout } from "@ui-kitten/components";

import Text from "../../../components/TextComponent";

import { height, width } from "../../../constants/Layout";

const TextPost = props => {
  let {
    data: {
      data: { images, desc }
    }
  } = props;

  return (
    <Layout>
      <Text style={styles.text}>{desc}</Text>
      <Layout style={styles.imagesContainer}>
        <SliderBox images={images} style={styles.images} />
      </Layout>
    </Layout>
  );
};
const styles = StyleSheet.create({
  images: {
    width: width,
    height: height * 0.7
  },
  text: {
    fontSize: 14,
    color: "gray"
  },
  imagesContainer: {
    marginLeft: -20
  }
});

export default TextPost;

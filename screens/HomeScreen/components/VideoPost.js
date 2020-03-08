import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Layout } from "@ui-kitten/components";
import { Video } from "expo-av";

import Text from "../../../components/TextComponent";

import { height, width } from "../../../constants/Layout";

const TextPost = props => {
  let {
    data: {
      data: { src, desc }
    }
  } = props;
  //   const [isMuted, setIsMuted] = useState(true);
  //   const toggleMute = () => {
  //     setIsMuted(!isMuted);
  //   };
  return (
    <Layout>
      <Text style={styles.text}>{desc}</Text>
      <TouchableWithoutFeedback>
        <Video
          source={{ uri: src }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          //   shouldPlay
          //   isLooping
          style={styles.video}
          useNativeControls
        />
      </TouchableWithoutFeedback>
    </Layout>
  );
};
const styles = StyleSheet.create({
  video: {
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

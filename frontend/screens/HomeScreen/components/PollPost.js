import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Radio, RadioGroup } from "@ui-kitten/components";

import Text from "../../../components/TextComponent";
import TaggedRecipie from "./TaggedRecipie";

import { height, width } from "../../../constants/Layout";

const TextPost = props => {
  let {
    data: {
      data: { questions, desc }
    }
  } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onCheckedChange = index => {
    setSelectedIndex(index);
  };
  return (
    <Layout>
      <Text style={styles.text}>{desc}</Text>
      <RadioGroup selectedIndex={selectedIndex} onChange={onCheckedChange}>
        {questions.map((question, key) => (
          <Radio key={key} style={styles.radio} text={question} />
        ))}
      </RadioGroup>
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
  },
  radio: {
    borderWidth: 1,
    borderColor: "#f1f1f1",
    padding: 10,
    marginTop: 0
  }
});

export default TextPost;

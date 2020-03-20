import React from "react";
import { Text } from "@ui-kitten/components";
import { RFValue } from "react-native-responsive-fontsize";

import { width } from "../constants/Layout";

const TextComponent = ({ children, style }) => {
  let fontSize;
  try {
    fontSize = style.fontSize;
    if (width < 330) {
      fontSize = RFValue(fontSize - 2);
    } else {
      fontSize = RFValue(fontSize);
    }
  } catch (e) {
    fontSize = 16;
  }
  if (isNaN(fontSize)) {
    fontSize = 16;
  }
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          padding: style ? (style.padding ? style.padding : 10) : 10
        },
        style
      ]}
    >
      {children}
    </Text>
  );
};

export default TextComponent;

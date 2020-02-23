import React from "react";
import { Text } from "@ui-kitten/components";
import { RFValue } from "react-native-responsive-fontsize";

const TextComponent = ({ children, style }) => {
  return (
    <Text
      style={[
        {
          fontSize: style
            ? style.fontSize
              ? RFValue(style.fontSize)
              : 16
            : 16,
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

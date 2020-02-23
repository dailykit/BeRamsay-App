import React, { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";

import Text from "../../../components/TextComponent";
import { ThemeContext } from "../../../contexts/theme-context";

import { height, width } from "../../../constants/Layout";

const ChipsView = props => {
  const themeContext = useContext(ThemeContext);
  const isLight = themeContext.theme == "light" ? true : false;
  return (
    <Layout style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.data.map((chip, _id) => (
          <Layout
            style={[styles.chip, { borderColor: isLight ? "gray" : "white" }]}
            key={_id}
          >
            <Text style={{ padding: 0, color: "gray" }}>{chip}</Text>
          </Layout>
        ))}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    height: 60,
    width,
    marginLeft: 10
  },
  chip: {
    padding: 5,
    borderWidth: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 2,
    marginRight: 5
  }
});

export default ChipsView;

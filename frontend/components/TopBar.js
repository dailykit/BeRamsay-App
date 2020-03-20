import React, { useState, useContext } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Layout } from "@ui-kitten/components";

import { ThemeContext } from "../contexts/theme-context";

import { height, width } from "../constants/Layout";
import Colors from "../constants/Colors";

const TopBar = () => {
  const [searchString, setSearchString] = useState("");
  const themeContext = useContext(ThemeContext);
  const isLight = themeContext.theme == "light" ? true : false;
  return (
    <Layout style={styles.container}>
      <Layout style={styles.searchSection}>
        <Feather
          style={styles.searchIcon}
          name="search"
          size={25}
          color={isLight ? "gray" : "white"}
        />
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: isLight
                ? Colors.backgroundLight
                : Colors.backgroundDark
            }
          ]}
          placeholder="Search"
          placeholderTextColor={isLight ? "gray" : "white"}
          onChangeText={searchString => {
            setSearchString(searchString);
          }}
          underlineColorAndroid="transparent"
        />
      </Layout>
      <Layout style={styles.otherOptions}>
        <Feather name="bell" size={25} color={isLight ? "gray" : "white"} />
        <Feather
          name="plus"
          size={30}
          color={isLight ? "gray" : "white"}
          style={styles.plusIcon}
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    width,
    alignItems: "center"
  },
  searchSection: {
    flex: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  searchIcon: {
    padding: 10
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9"
  },
  otherOptions: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  plusIcon: {}
});

export default TopBar;

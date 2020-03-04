import React, { useState } from "react";
import { Layout } from "@ui-kitten/components";
import { StyleSheet, TouchableOpacity } from "react-native";
import Story from "../../../components/stories";

import Text from "../../../components/TextComponent";
import { width, height } from "../../../constants/Layout";

const stories = [
  {
    id: "1",
    source: require("../../../assets/story.jpg"),
    user: "Sunny Dhama",
    avatar: require("../../../assets/avatar.jpg")
  },
  {
    id: "2",
    source: require("../../../assets/story.jpg"),
    user: "Ananya Rajput",
    avatar: require("../../../assets/avatar.jpg")
  },
  {
    id: "3",
    source: require("../../../assets/story.jpg"),
    user: "Rishi",
    avatar: require("../../../assets/avatar.jpg")
  },
  {
    id: "4",
    source: require("../../../assets/story.jpg"),
    user: "Praveen",
    avatar: require("../../../assets/avatar.jpg")
  }
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <Layout style={styles.container}>
      <Layout style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab("all")}
          style={[styles.tab, activeTab == "all" ? styles.activeTab : {}]}
        >
          <Text style={styles.text}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("breakfast")}
          style={[styles.tab, activeTab == "breakfast" ? styles.activeTab : {}]}
        >
          <Text style={styles.text}>Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("lunch")}
          style={[styles.tab, activeTab == "lunch" ? styles.activeTab : {}]}
        >
          <Text style={styles.text}>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("dinner")}
          style={[styles.tab, activeTab == "dinner" ? styles.activeTab : {}]}
        >
          <Text style={styles.text}>Dinner</Text>
        </TouchableOpacity>
      </Layout>
      <Layout style={styles.storiesContainer}>
        <Story
          unPressedBorderColor="#e95950"
          pressedBorderColor="#ebebeb"
          stories={stories}
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width,
    flexDirection: "row",
    alignItems: "center",
    height: 40
  },
  tab: {
    flex: 1
  },
  text: {
    textAlign: "center"
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  },
  storiesContainer: {
    height: height * 0.2,
    justifyContent: "center"
  },
  container: {
    position: "absolute"
  }
});

export default Tabs;

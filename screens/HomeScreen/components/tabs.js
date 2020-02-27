import React, { useState } from "react";
import { Layout } from "@ui-kitten/components";
import { StyleSheet, TouchableOpacity } from "react-native";

import Text from "../../../components/TextComponent";
import { width, height } from "../../../constants/Layout";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
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
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width,
    flexDirection: "row",
    alignItems: "center"
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
  }
});

export default Tabs;

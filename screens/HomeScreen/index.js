import * as React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import TopBar from "./components/TopBar";
import ChipsView from "./components/ChipsView";
import ResturantScrollCardView from "./components/ResturantScrollCardView";

const dataChips = [
  "resturants",
  "mealkits",
  "recipies",
  "chefs",
  "fitness center",
  "rewards"
];

const dataScrollCards = [
  {
    name: "Indian Resturant",
    following: "200",
    recipies: "7"
  },
  {
    name: "Indian Resturant",
    following: "200",
    recipies: "7"
  },
  {
    name: "Indian Resturant",
    following: "200",
    recipies: "7"
  },
  {
    name: "Indian Resturant",
    following: "200",
    recipies: "7"
  }
];

export default function HomeScreen() {
  return (
    <Layout style={styles.container}>
      <TopBar />
      <ChipsView data={dataChips} />
      <Layout style={styles.nearYou}>
        <Text style={styles.nearYouHeading} category="h5">
          Resturants Near You
        </Text>
        <Text category="h6" style={styles.viewAllText}>
          view all >
        </Text>
      </Layout>
      <ResturantScrollCardView data={dataScrollCards} />
    </Layout>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nearYou: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  nearYouHeading: {
    paddingLeft: 10
  },
  viewAllText: {
    paddingRight: 10
  }
});

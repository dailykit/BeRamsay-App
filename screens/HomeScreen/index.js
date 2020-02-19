import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import TopBar from "./components/TopBar";
import ChipsView from "./components/ChipsView";
import ResturantScrollCardView from "./components/ResturantScrollCardView";
import TrendingRecipiesView from "./components/TrendingRecipiesView";

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

const trendingRecipiesData = [
  {
    resturant_name: "Vegan Adda",
    recipie_name: "Classic Caesar Salad",
    price: "$ 2.50"
  },
  {
    resturant_name: "Vegan Adda",
    recipie_name: "Classic Caesar Salad",
    price: "$ 2.50"
  },
  {
    resturant_name: "Vegan Adda",
    recipie_name: "Classic Caesar Salad",
    price: "$ 2.50"
  },
  {
    resturant_name: "Vegan Adda",
    recipie_name: "Classic Caesar Salad",
    price: "$ 2.50"
  },
  {
    resturant_name: "Vegan Adda",
    recipie_name: "Classic Caesar Salad",
    price: "$ 2.50"
  },
  {
    resturant_name: "Vegan Adda",
    recipie_name: "Classic Caesar Salad",
    price: "$ 2.50"
  },
  {
    resturant_name: "Vegan Adda",
    recipie_name: "Classic Caesar Salad",
    price: "$ 2.50"
  },
  {
    resturant_name: "Vegan Adda",
    recipie_name: "Classic Caesar Salad",
    price: "$ 2.50"
  }
];

export default function HomeScreen() {
  return (
    <Layout style={styles.container}>
      <TopBar />
      <ChipsView data={dataChips} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Layout style={styles.nearYou}>
          <Text style={styles.nearYouHeading} category="h5">
            Resturants Near You
          </Text>
          <Text style={styles.viewAllText}>view all ></Text>
        </Layout>
        <ResturantScrollCardView data={dataScrollCards} />
        <Layout style={[styles.nearYou, { marginTop: 20 }]}>
          <Text style={styles.nearYouHeading} category="h5">
            Trending recipies near you
          </Text>
          <Text style={styles.viewAllText}>view all ></Text>
        </Layout>
        <TrendingRecipiesView data={trendingRecipiesData} />
      </ScrollView>
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

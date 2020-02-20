import * as React from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import TopBar from "./components/TopBar";
import ChipsView from "./components/ChipsView";
import ResturantScrollCardView from "./components/ResturantScrollCardView";
import TrendingRecipiesView from "./components/TrendingRecipiesView";
import ResturantView from "./ResturantView";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

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

const SearchScreenView = props => {
  return (
    <Layout style={styles.container}>
      <TopBar />
      <ChipsView data={dataChips} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Layout style={styles.nearYou}>
          <Text style={styles.nearYouHeading} category="h5">
            Resturants Near You
          </Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("ResturantView", {
                data: dataScrollCards
              })
            }
          >
            <Text style={styles.viewAllText}>view all ></Text>
          </TouchableOpacity>
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
};

export default function SearchScreen() {
  return (
    <Stack.Navigator initialRouteName="HomeSearch">
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="SearchScreenView"
        component={SearchScreenView}
      />
    </Stack.Navigator>
  );
}

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

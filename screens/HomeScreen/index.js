import * as React from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Layout } from "@ui-kitten/components";

import Text from "../../components/TextComponent";
import TopBar from "../../components/TopBar";
import Tabs from "./components/tabs";
import Posts from "./Posts";
import AppPost from "./AddPost";

import { height, width } from "../../constants/Layout";

import { createStackNavigator } from "@react-navigation/stack";
import AddPost from "./AddPost";
const Stack = createStackNavigator();

const HomeScreenView = ({ navigation }) => {
  const [scroll, setscroll] = React.useState(true);
  return (
    <Layout style={styles.container}>
      <TopBar />
      <ScrollView scrollEnabled={scroll} style={styles.container}>
        <Tabs
          startScroll={() => setscroll(true)}
          stopScroll={() => setscroll(false)}
        />
        <TouchableOpacity
          style={styles.newPostContainer}
          onPress={() => navigation.navigate("AddPost")}
        >
          <Layout style={styles.newPost}>
            <Text style={[styles.cookingText, { fontSize: 18 }]}>
              What's Cooking Today?
            </Text>
            <Text style={[styles.cookingText, { fontSize: 14 }]}>
              add a post to your Dailykit journey
            </Text>
          </Layout>
        </TouchableOpacity>
        <Posts />
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
        name="HomeScreenView"
        component={HomeScreenView}
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
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 22
  },
  viewAllText: {
    paddingRight: 10
  },

  newPostContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 140,
    marginTop: height * 0.2 + 30,
    zIndex: -1
  },
  newPost: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    paddingVertical: 40
  },
  cookingText: {
    color: "gray"
  }
});

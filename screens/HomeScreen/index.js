import * as React from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Layout } from "@ui-kitten/components";

import Text from "../../components/TextComponent";
import TopBar from "../../components/TopBar";
import Tabs from "./components/tabs";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const HomeScreenView = props => {
  return (
    <Layout style={styles.container}>
      <TopBar />
      <Tabs />
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
  }
});

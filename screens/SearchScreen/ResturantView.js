import React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import { Layout, Button } from "@ui-kitten/components";

import Text from "../../components/TextComponent";
import { height, width } from "../../constants/Layout";

const ResturantView = props => {
  props.navigation.setOptions({
    title: "Resturants",
    headerStatusBarHeight: 0,
    headerLeft: () => (
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => props.navigation.goBack()}
      >
        <Image
          style={{ height: 20 }}
          source={require("../../assets/back.png")}
        />
      </TouchableOpacity>
    )
  });
  return (
    <Layout style={styles.container}>
      <ScrollView
        alwaysBounceHorizontal={false}
        showsHorizontalScrollIndicator={false}
      >
        {props.route.params.data.map((resturant, _id) => (
          <Layout style={styles.item} key={_id}>
            <Image
              style={styles.image}
              source={require("../../assets/temp_resturnt.jpg")}
            />
            <View style={styles.overlay}></View>
            <Text category="h4" style={styles.resturantName}>
              {resturant.name}
            </Text>
            <View style={styles.detailsConatiner}>
              <View style={styles.details}>
                <Text category="h6" style={styles.detailsText}>
                  {resturant.recipies} recipies |{" "}
                </Text>
                <Text category="h6" style={styles.detailsText}>
                  {resturant.following} following
                </Text>
              </View>
              <Button style={styles.button}>Follow</Button>
            </View>
          </Layout>
        ))}
      </ScrollView>
      <Layout style={styles.bottomBar}>
        <Image source={require("./../../assets/back.png")} />
        <Image source={require("./../../assets/filter.png")} />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20
  },
  item: {
    height: height * 0.27,
    width: width - 20,
    borderRadius: 5,
    position: "relative",
    marginBottom: 20
  },
  image: {
    height: null,
    width: null,
    flex: 1,
    borderRadius: 5
  },
  resturantName: {
    position: "absolute",
    color: "white",
    bottom: 60,
    left: 10,
    fontSize: 24
  },
  button: {
    backgroundColor: "#3FA4FF",
    borderColor: "#3FA4FF"
  },
  details: {
    flexDirection: "row"
  },
  detailsText: {
    color: "white",
    fontSize: 16
  },
  overlay: {
    flex: 1,
    position: "absolute",
    backgroundColor: "black",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    opacity: 0.27
  },
  detailsConatiner: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    justifyContent: "space-between"
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  }
});

export default ResturantView;

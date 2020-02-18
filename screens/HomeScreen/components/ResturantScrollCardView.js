import React from "react";
import { ScrollView, Image, StyleSheet, View } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

import { height, width } from "../../../constants/Layout";

const ResturantScrollCardView = props => {
  return (
    <Layout style={styles.container}>
      <ScrollView
        horizontal={true}
        alwaysBounceHorizontal={false}
        showsHorizontalScrollIndicator={false}
      >
        {props.data.map((resturant, _id) => (
          <Layout style={styles.item} key={_id}>
            <Image
              style={styles.image}
              source={require("../../../assets/temp_resturnt.jpg")}
            />
            <View style={styles.overlay}></View>
            <Text category="h4" style={styles.resturantName}>
              {resturant.name}
            </Text>
            <Button style={styles.button}>Follow</Button>
            <View style={styles.details}>
              <Text category="h6" style={styles.detailsText}>
                {resturant.recipies} recipies |{" "}
              </Text>
              <Text category="h6" style={styles.detailsText}>
                {resturant.following} following
              </Text>
            </View>
          </Layout>
        ))}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.3,
    marginTop: 10,
    marginLeft: 10
  },
  item: {
    height: height * 0.3,
    width: width * 0.8,
    borderRadius: 10,
    marginRight: 15,
    position: "relative"
  },
  image: {
    height: null,
    width: null,
    flex: 1,
    borderRadius: 10
  },
  resturantName: {
    position: "absolute",
    color: "white",
    left: 10,
    bottom: height * 0.08
  },
  button: {
    position: "absolute",
    right: 10,
    bottom: 10
  },
  details: {
    position: "absolute",
    flexDirection: "row",
    bottom: height * 0.03,
    left: 10
  },
  detailsText: {
    color: "white"
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
    opacity: 0.3
  }
});

export default ResturantScrollCardView;

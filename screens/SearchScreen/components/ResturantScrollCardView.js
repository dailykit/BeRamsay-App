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
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.27,
    marginTop: 10
  },
  item: {
    height: height * 0.27,
    width: width * 0.85,
    borderRadius: 10,
    position: "relative",
    marginLeft: 7,
    marginRight: 7
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
    bottom: 60,
    left: 10
  },
  button: {
    backgroundColor: "#3FA4FF",
    borderColor: "#3FA4FF"
  },
  details: {
    flexDirection: "row"
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
  }
});

export default ResturantScrollCardView;

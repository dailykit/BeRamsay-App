import React from "react";
import { Image, StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";

import Text from "../../../components/TextComponent";

const TaggedRecipie = () => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/salad.jpg")}
        />
      </Layout>
      <Layout style={styles.details}>
        <Text style={styles.resturantName}>Vegan Adda</Text>
        <Text style={styles.recipieName}>Grilled Chicken</Text>
      </Layout>
      <Layout style={styles.iconsView}>
        <Image
          style={styles.icons}
          source={require("../../../assets/share.png")}
        />
        <Image
          style={styles.icons}
          source={require("../../../assets/cart.png")}
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row"
  },
  imageContainer: {
    flex: 3
  },
  image: {
    height: null,
    width: null,
    flex: 1,
    resizeMode: "cover"
  },
  details: {
    flex: 6,
    justifyContent: "space-evenly",
    padding: 10
  },
  iconsView: {
    flex: 1,
    justifyContent: "space-between"
  },
  resturantName: {
    fontSize: 18
  },
  recipieName: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default TaggedRecipie;

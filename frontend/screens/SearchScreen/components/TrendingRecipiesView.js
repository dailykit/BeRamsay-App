import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Layout } from "@ui-kitten/components";

import Text from "../../../components/TextComponent";
import { height, width } from "../../../constants/Layout";
import tastyIcon from "../../../assets/tasty.png";

const QuantitySelector = props => {
  const quantites = [1, 2, 3, 4, 5, 6];
  const [selected, setSelected] = useState(1);
  return (
    <Layout style={styles.quantityContainer}>
      {quantites.map((box, _id) => (
        <TouchableOpacity
          onPress={() => setSelected(box)}
          style={box == selected ? styles.selected : styles.unselected}
          key={_id}
        >
          <Text
            style={
              box == selected ? styles.selectedText : styles.unselectedText
            }
          >
            {box}
          </Text>
        </TouchableOpacity>
      ))}
    </Layout>
  );
};

const TrendingRecipiesView = props => {
  return (
    <Layout>
      <Layout style={styles.container}>
        {props.data.map((recipie, _id) => (
          <Layout style={styles.block} key={_id}>
            <Layout style={styles.upperHalf}>
              <Layout style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("../../../assets/salad.jpg")}
                />
              </Layout>
              <Layout style={styles.details}>
                <Text style={styles.resturant_name}>
                  {recipie.resturant_name}
                </Text>
                <Text style={styles.recipie_name}>{recipie.recipie_name}</Text>
                <QuantitySelector />
                <Layout style={styles.priceConatiner}>
                  <Text style={styles.priceText}>{recipie.price}</Text>
                  <Text style={styles.date}>2d before</Text>
                </Layout>
              </Layout>
            </Layout>
            <Layout style={styles.lowerHalf}>
              <Layout style={styles.lowerLeft}>
                {/* <Feather name="heart" size={25} />
                <Feather name="share" size={25} />
                <Feather name="calendar" size={25} /> */}
                <Image style={styles.icons} source={tastyIcon} />
                <Image
                  style={styles.icons}
                  source={require("../../../assets/share.png")}
                />
                <Image
                  style={styles.icons}
                  source={require("../../../assets/calendar.png")}
                />
              </Layout>
              <Layout style={styles.lowerRight}>
                {/* <Feather style={styles.cart} name="shopping-cart" size={25} /> */}
                <Image
                  style={[styles.cart, styles.icons]}
                  source={require("../../../assets/cart.png")}
                />
              </Layout>
            </Layout>
          </Layout>
        ))}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    marginTop: 20
  },
  block: {
    width,
    height: height * 0.3,

    marginBottom: 20
  },
  upperHalf: {
    flex: 8,
    flexDirection: "row"
  },
  imageContainer: {
    flex: 5
  },
  image: {
    height: null,
    width: null,
    flex: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  details: {
    flex: 5,
    padding: 10
  },
  lowerHalf: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center"
  },
  lowerLeft: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around"
  },
  lowerRight: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row"
  },
  cart: {
    marginRight: 20,
    padding: 10,
    borderRadius: 50
  },
  quantityContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center"
  },
  selected: {
    width: width * 0.09,
    alignItems: "center",
    height: height * 0.06,
    justifyContent: "center",
    backgroundColor: "#3FA4FF"
  },
  unselected: {
    width: width * 0.075,
    alignItems: "center",
    height: height * 0.04,
    justifyContent: "center",
    backgroundColor: "#eee"
  },
  selectedText: {
    color: "white"
  },
  unselectedText: {},
  recipie_name: {
    color: "#1f1f1f",
    fontSize: 18,
    padding: 0,
    marginTop: 10
  },
  resturant_name: {
    color: "gray",
    fontSize: 16,
    padding: 0
  },
  priceConatiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  date: {
    color: "gray"
  },
  icons: {},
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    position: "absolute",
    bottom: 0,
    width,
    paddingBottom: 10
  }
});

export default TrendingRecipiesView;

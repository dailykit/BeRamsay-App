import * as React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import Text from "../../components/TextComponent";

export default function SearchScreen() {
  return (
    <Layout style={styles.container}>
      <Text style={{ fontSize: 28 }}>Home Screen</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: 50
  },
  profileLayout: {
    flexDirection: "row",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageLayout: {
    flexDirection: "column",
    flex: 1
  },
  nameLayout: {
    flexDirection: "column",
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingStart: 10,
  },
  editProfileLayout: {
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-end"
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  counterRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around"
  },
  counterElement: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  counterValue : {
    fontSize: 15,
    fontWeight: 'bold'
  },
  counterText : {
    fontSize: 12,
    marginTop: -5,
    fontWeight: 'normal'
  },
  editProfileText: {
    fontSize: 10,
    fontWeight: 'bold'
  }
});
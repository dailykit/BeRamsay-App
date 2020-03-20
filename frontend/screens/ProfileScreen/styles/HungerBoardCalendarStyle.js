import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingStart: 10,
    paddingEnd: 10
  },
  listContainer: {
    height:85
  },
  listStyle: {
  },
  horizontalFlatlistItem:{
      flex:1,
      flexDirection:'column',
      width: 60,
      margin: 4,
  },
  dayNumberText : {
    fontSize: 19,
    fontWeight: 'normal'
  },
  dayNameText : {
    fontSize: 15,
    fontWeight: 'normal',
    marginTop: -10,
  },
  viewHungerBoardLayout: {
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-end"
  },
  viewHungerBoardText: {
    fontSize: 10,
    fontWeight: 'bold'
  },
  titleLayout: {
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-start"
  },
  topLayout: {
    flexDirection: "row",
    flex: 1,
  },
  iconLayout:{
    flexDirection: "row",
    flex: 1,
  },
  iconStyle:{
    marginRight: 2
  },
  titleText: {
    fontSize: 13,
    fontWeight: 'normal'
  }
});
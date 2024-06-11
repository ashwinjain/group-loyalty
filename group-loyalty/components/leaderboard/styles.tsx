import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
  },
  backgroundContainer: {
    display: "flex",
    flexDirection: "row",
    height: 49,
    width: "80%",
    borderRadius: 15,
    justifyContent: "flex-end",
    borderTopWidth: 1,
  },
  positionContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  position: {
    fontSize: 18,
    borderRadius: 15,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 19,
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 15,
    backgroundColor: "white",
  },
  itemName: {
    fontSize: 18,
    paddingStart: 10,
  },
  itemAmount: {
    fontSize: 18,
    marginLeft: "auto",
    alignItems: "center",
    paddingEnd: 10,
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
    marginBottom: 20,
  },
  leftContainer: {
    // flex: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20,
  },
  rightContainer: {
    flex: 1,
  },
  groupName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  daysLeft: {
    fontSize: 22,
    marginBottom: 20,
  },
});

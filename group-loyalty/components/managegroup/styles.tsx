import { StyleSheet } from "react-native";

import { Colors } from "../../constants/types/Colors";
export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
    justifyContent: "center",
  },
  pressable: {
    backgroundColor: Colors.primary,
    width: "90%",
    borderRadius: 7,
    marginTop: 20,
    shadowColor: "black",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    margin: 15,
  },
});

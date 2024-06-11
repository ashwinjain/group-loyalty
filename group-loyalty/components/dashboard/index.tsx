import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import Chart from "../chart";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.groupName}>Hackatron</Text>
        <Text style={styles.daysLeft}>10 Days Left!</Text>
      </View>
      <View style={styles.rightContainer}>
        <Chart />
      </View>
    </View>
  );
}

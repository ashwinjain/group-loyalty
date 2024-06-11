import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";
import { styles } from "./style";
import { Colors } from "@/constants/types/Colors";
export default class Chart extends Component {
  render() {
    const widthAndHeight = 125;
    const series = [273, 147, 136, 150];
    const sliceColor = [
      Colors.primary,
      Colors.secondary,
      Colors.tertiary,
      "#FFFFFF",
    ];

    return (
      <View style={styles.container}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.7}
          coverFill={"#FFFFFF"}
        />
      </View>
    );
  }
}

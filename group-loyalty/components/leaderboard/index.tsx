import { View, Text } from "react-native";
import { styles } from "./styles";
import { Employee } from "@/constants/types/Employee";

interface LeaderboardProps {
  data: Employee[];
}

export default function Leaderboard(props: LeaderboardProps) {
  return props.data.map((item, index) => (
    <View key={index} style={styles.container}>
      <View
        style={[
          styles.backgroundContainer,
          { backgroundColor: item.color, borderTopColor: item.color },
        ]}
      >
        <View style={styles.positionContainer}>
          <Text style={styles.position}>{index}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemAmount}>{item.amount}</Text>
        </View>
      </View>
    </View>
  ));
}

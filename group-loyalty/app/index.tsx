import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { DatabaseAPI } from "@/backend/api";

import Main from "@/components/main";
import Leaderboard from "@/components/leaderboard";

import { Employee } from "../constants/types/Employee";
import { Colors } from "../constants/types/Colors";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const db = new DatabaseAPI();
  const [group, setGroup] = useState(false);
  const [data, setData] = useState<Employee[]>([]);

  useEffect(() => {
    db.getEmployeesInGroup()
      .then((employees) => {
        if (employees.length > 0) {
          setGroup(true);
          setData(employees);
        }
      })
      .catch((error) => {
        console.error("Error checking cardholder status:", error);
      });
  }, []);
  console.log(group);

  return <Main group={group} data={data} />;
}

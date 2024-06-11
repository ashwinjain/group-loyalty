import React, { useEffect } from "react";
import { View, Text } from "react-native";

import Leaderboard from "./leaderboard";
import { Colors } from "../constants/types/Colors";
import { Employee } from "@/constants/types/Employee";
import Dashboard from "./dashboard";
import ManageGroup from "./managegroup";

import { useState } from "react";
import { DatabaseAPI } from "@/backend/api";

const Main = ({ group, data }: { group: boolean; data: Employee[] }) => {
  function reload() {
    window.location.reload();
  }
  if (group === true) {
    return (
      <View style={{ display: "flex", flexDirection: "column" }}>
        <Dashboard />
        <Leaderboard data={data} />
        <ManageGroup />
      </View>
    );
  } else {
    return (
      <View>
        <Text>
          Group not found. Click below to invite your friends to this group
        </Text>
        <ManageGroup />
      </View>
    );
  }
};

export default Main;

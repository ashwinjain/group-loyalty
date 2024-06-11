import React from "react";
import { View, Text, Pressable, Alert, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Employee } from "@/constants/types/Employee";
import { useState } from "react";
import { DatabaseAPI } from "@/backend/api";
import Main from "../main";
import HomeScreen from "@/app";
import reload from "@/app";

export default function ManageGroup() {
  const [input, setInput] = useState("");

  const sendInvite = (email: string) => {
    const db = new DatabaseAPI();
    db.isCardHolderByEmail(email)
      .then((cardholder) => {
        if (cardholder) {
          console.log("updaing status");
          db.updateEmployeeGroupStatus(email, true);
          Alert.alert("Congratulations", email + " has joined your group!", [
            {
              text: "Ok",
              onPress: () => {
                this.force;
              },
            },
          ]);
        } else {
          Alert.alert("Invalid User", email + " is not a cardholder.", [
            { text: "Ok", type: "cancel" },
          ]);
        }
      })
      .catch((error) => {
        console.error("Error checking cardholder status:", error);
      });
  };
  const inviteFriends = () => {
    const title = "Invite Friends!";
    const message = "Please enter your friends email address.";
    const buttons = [
      {
        text: "Invite",
        onPress: (text: string) => {
          setInput(text);
          console.log("Inviting friend with email:", text);
          sendInvite(text);
        },
      },
      { text: "Cancel", type: "cancel" },
    ];
    Alert.prompt(title, message, buttons);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.pressable} onPress={inviteFriends}>
        <Text style={styles.text}>Manage Group</Text>
      </TouchableOpacity>
    </View>
  );
}

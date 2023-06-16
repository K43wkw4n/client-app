import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../store/store";
import { Logout } from "../../../store/context/accountSlice";

var width = Dimensions.get("window").width;

export const SettingScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Text>SettingScreen</Text>
      <TouchableOpacity onPress={() => dispatch(Logout())}
        style={{
          padding:20,
        }}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

var width = Dimensions.get("window").width;

export const CardProduct = ({ data, navigation }: any) => {
  return (
    <>
      <TouchableOpacity
        style={{
          margin: 5,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("DetailsProduct", { data })}
      >
        <View>
          <Image
            style={{
              height: 220,
              width: width / 2 - 10,
            }}
            source={{
              uri: data.item.image,
            }}
          />
          <Text style={{ position: "absolute", margin: 10, bottom: 0 }}>
            Converse
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

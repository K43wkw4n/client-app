import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Loading from "../../../screens/Loading";
import { useAppDispatch, useAppSelector } from "../../../store/store";

var width = Dimensions.get("window").width;

export const DetailsProduct = ({ route }: any) => {
  const [load, setLoad] = useState(true);
  const { data }: any = route.params;
  const { item } = data;

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  console.log("card", data);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View>
          <Image
            style={{ height: 200, width: width }}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View>
          <View>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.brand}</Text>
            <Text>{item.price}</Text>
            <Text>{item.quantity}</Text>
            <Text>{item.size}</Text>
          </View>
        </View>
      </SafeAreaView>
      {load && <Loading />}
    </>
  );
};

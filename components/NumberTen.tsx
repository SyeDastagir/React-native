import { View, Text } from "react-native";
import React from "react";
import { NumberOne } from "./NumberOne";
import { NumberZero } from "./NumberZero";

const NumberTen = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <NumberOne />
      <NumberZero />
    </View>
  );
};

export { NumberTen };

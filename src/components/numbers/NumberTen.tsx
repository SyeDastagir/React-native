import { View } from "react-native";
import React from "react";
import { NumberOne } from "./NumberOne";
import { NumberZero } from "./NumberZero";

const NumberTen = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ marginRight: -30 }}>
        <NumberOne />
      </View>
      <NumberZero />
    </View>
  );
};

export { NumberTen };

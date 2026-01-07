import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNavBar from "./navigation/BottomNavBar";
import { Provider } from "react-redux";
import { appStore } from "./store/AppStore";

export default function App() {
  return (
    <Provider store={appStore}>
      <NavigationContainer>
        <BottomNavBar />
      </NavigationContainer>
    </Provider>
  );
}

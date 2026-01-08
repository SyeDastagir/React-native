import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNavBar from "./src/navigation/BottomNavBar";
import { Provider } from "react-redux";
import { appStore } from "./src/store/AppStore";

export default function App() {
  return (
    <Provider store={appStore}>
      <NavigationContainer>
        <BottomNavBar />
      </NavigationContainer>
    </Provider>
  );
}

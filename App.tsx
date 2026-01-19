import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNavBar from "./src/navigation/BottomNavBar";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from './src/navigation/AuthNavigation';
import MainStackNavigation from "./navigation/MainStackNavigation";

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
   
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{headerShown :false}}>
          <AppStack.Screen name="Main" component={BottomNavBar}/>
          <AppStack.Screen name="Auth" component={AuthNavigator}/>
        </AppStack.Navigator>

      </NavigationContainer>
   
  );
}

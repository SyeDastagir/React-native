import { HomeScreen } from "../screens/home/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function MainStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, gestureEnabled: true }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default MainStackNavigation;

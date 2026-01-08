import { StyleSheet, Text, View, Switch } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAdultContent } from "../store/slices/ProfileSettingSlicer";
//import { RootState } from "../store/AppStore";

const ProfileScreen = () => {
  const adultContent = useSelector((state: any) => state.settings.adultContent);
  const dispatcher = useDispatch();
  const toggleSwitch = () => {
    dispatcher(toggleAdultContent(!adultContent));
  };
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <View style={styles.settingContainer}>
        <Text>Adult Content: {adultContent ? "Enabled" : "Disabled"}</Text>
        <Switch
          trackColor={{
            false: "#767577",
            true: "rgba(45, 250, 38, 0.24)39, 67, 1)ff",
          }}
          thumbColor={adultContent ? "rgba(0, 139, 67, 1)ff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={adultContent}
        />
      </View>
    </View>
  );
};

export { ProfileScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  settingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import React from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { profileSettingAtom } from "../store/slices/ProfileSettingSlicer";

const ProfileScreen = ({ navigation }) => {
  const profileSettings = useAtomValue(profileSettingAtom);
  const setAdultContent = useSetAtom(profileSettingAtom);

  const toggleSwitch = () => {
    setAdultContent({
      ...profileSettings,
      adultContent: !profileSettings.adultContent,
    });
  };

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <View style={styles.settingContainer}>
        <Text>Adult Content: {profileSettings.adultContent ? "Enabled" : "Disabled"}</Text>
        <Switch
          trackColor={{
            false: "#767577",
            true: "rgba(45, 250, 38, 0.24)",
          }}
          thumbColor={profileSettings.adultContent ? "rgba(0, 139, 67, 1)" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={profileSettings.adultContent}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Auth", {
            screen: "SignIn",
          });
        }}
        style={styles.signInButton}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 10,
  },
  settingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  signInButton: {
    marginTop: 10,
  },
}
);
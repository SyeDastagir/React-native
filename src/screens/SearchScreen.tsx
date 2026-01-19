import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<string[]>([
    "React Native",
    "TypeScript",
    "Expo",
    "JavaScript",
  ]);

  const filteredResults = results.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
      style={styles.searchBar}
      placeholder="Search for movies, shows, channel..."
      value={searchQuery}
      onChangeText={setSearchQuery}
      />
      <FlatList
      data={filteredResults}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item}</Text>
        </View>
      )}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    margin: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  listItemText: {
    fontSize: 16,
  },
});
export { SearchScreen };
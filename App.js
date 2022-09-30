import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Text Input</Text>
      <TextInput
        onChangeText={(value) => setName(value)}
        style={styles.input}
        placeholder="Enter your Name"
      />
      <Text style={styles.text}>Name: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FF0000", // Red color
    fontSize: 50,
    fontStyle: "italic",
    alignItems: "center",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#FF0000",
    textAlign: "center",
  },
});

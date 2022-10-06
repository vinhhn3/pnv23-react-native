import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    const [name, setName] = useState("");

    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
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

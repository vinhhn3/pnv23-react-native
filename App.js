import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
    const [name, setName] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>
                <View style={styles.items}>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    items: {},
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

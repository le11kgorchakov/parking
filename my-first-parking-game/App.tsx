import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import ParkingAreaComponent from "./assets/src/components/Page";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open tests up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

      <ParkingAreaComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

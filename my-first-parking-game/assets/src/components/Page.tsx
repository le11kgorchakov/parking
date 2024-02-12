// Import necessary components from React and React Native
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RenderGrid from "./RenderGrid";
import Car from "./Car";

interface ParkingAreaComponent {}

export const ParkingAreaComponent: React.FC<ParkingAreaComponent> = () => {
  const [gridSize, setGridSize] = useState(6);
  const [index, setIndex] = useState(0);

  const handlePress = () => {
    const numbers = [3, 4, 5, 6, 7];
    function getNextNumber(): number {
      const nextNumber = numbers[index];
      setIndex((index + 1) % numbers.length); // Loop back to the beginning if we reach the end
      return nextNumber;
    }
    setGridSize(getNextNumber());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the parking game</Text>
      <TouchableOpacity style={btnStyles.button} onPress={handlePress}>
        <Text style={btnStyles.buttonText}>Change Grid Size</Text>
      </TouchableOpacity>
      {RenderGrid({ gridSize })}
      <Car initialPosition={{ x: 50, y: 50 }} />
    </View>
  );
};

const btnStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    position: "absolute",
    top: 35,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ParkingAreaComponent;

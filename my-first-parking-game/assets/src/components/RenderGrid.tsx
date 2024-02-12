import React from "react";
import { View, StyleSheet } from "react-native";
import Box from "./Box";

interface GridProps {
  gridSize: number;
}

const RenderGrid = ({ gridSize }: GridProps): React.ReactNode => {
  const totalLength = gridSize + 2;
  const GridBoarder = Array.from({ length: totalLength }, (_, rowIndex) => (
    <View key={rowIndex} style={styles.row}>
      {Array.from({ length: totalLength }, (_, colIndex) => {
        if (
          colIndex === 0 ||
          rowIndex == 0 ||
          colIndex === totalLength - 1 ||
          rowIndex === totalLength - 1
        ) {
          return (
            <Box
              key={colIndex}
              design={{
                backgroundColor:
                  colIndex === totalLength - 1 && rowIndex === 3
                    ? "whire"
                    : "black",
                height:
                  rowIndex === 0 || rowIndex === totalLength - 1 ? 30 : 80,
                width: colIndex === 0 || colIndex === totalLength - 1 ? 30 : 80,
              }}
            />
          );
        } else
          return <Box key={colIndex} design={{ backgroundColor: "blue" }} />;
      })}
    </View>
  ));

  return <View style={styles.gridContainer}>{GridBoarder}</View>;
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "column", // Arrange rows vertically
    alignItems: "center", // Center the grid horizontally
  },
  row: {
    flexDirection: "row", // Arrange boxes horizontally within a row
  },
});

export default RenderGrid;

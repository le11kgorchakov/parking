import React from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";

interface BoxProps {
  design?: {
    width?: number;
    height?: number;
    backgroundColor?: string;
    alignSelf?:
      | "auto"
      | "baseline"
      | "center"
      | "flex-end"
      | "flex-start"
      | "stretch";
  };
}

const Box: React.FC<BoxProps> = ({ design }: BoxProps) => {
  const styles = StyleSheet.create({
    boxContainer: {
      width: design?.width ?? 80,
      height: design?.height ?? 80,
      backgroundColor: design?.backgroundColor ?? "blue",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: design?.alignSelf ?? "auto",
    },
  });

  return <View style={styles.boxContainer}></View>;
};

export default Box;

import React, { useState } from "react";
import { View, StyleSheet, PanResponder, Animated } from "react-native";

interface CarProps {}

const Car: React.FC<CarProps> = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [pan] = useState(() => new Animated.ValueXY(coordinates));
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
    onPanResponderRelease: (_, gestureState) => onDragEnd(gestureState),
  });

  const onDragEnd = (gestureState: any) => {
    // You can access the final coordinates here
    const finalX = gestureState.moveX;
    const finalY = gestureState.moveY;

    // You can perform any additional logic with the final coordinates
    setCoordinates({ x: finalX, y: finalY });
    console.log("Box dropped at:", coordinates);
  };

  return (
    <Animated.View
      style={[
        styles.box,
        {
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        },
      ]}
      {...panResponder.panHandlers}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    width: 70,
    height: 70,
    backgroundColor: "yellow",
  },
});

export default Car;

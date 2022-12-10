import { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";


export default (props) => {
  const animatedProgressValue = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    var progress = props.progress;
    if (progress > props.max) {
      progress = props.max;
    }
    Animated.sequence([
    Animated.timing(animatedProgressValue, {toValue: progress, duration: 3000}),
    //Animated.timing(animatedProgressValue, {toValue: -100}),
      
    
  ]).start();
  }, [animatedProgressValue, props, props.progress]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: props.backColor, borderColor: props.borderColor },
      ]}
    >
      <Animated.View
        style={[
          styles.bar,
          {
            width: animatedProgressValue.interpolate({
              inputRange: [props.min, props.max],
              outputRange: ["0%", "100%"],
            }),
            backgroundColor: props.barColor,
          },
        ]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 55,
    padding: 0,
    overflow: "hidden",
    borderRadius: 100,
    width: "80%",
  },
  bar: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderWidth: 0,
    borderRadius: 1,
  },
});

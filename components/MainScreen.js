import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  Title,
  Text,
  Button,
  Chip,
  Snackbar,
  Portal,
} from "react-native-paper";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Title>Today</Title>
      <Chip
        mode="outlined"
        icon="information"
        selectedColor="#2176FF"
        style={{ marginTop: 10 }}
        onPress={() => setIsTargetDialogVisible(true)}
      >
        Water target: 2450
        ml
      </Chip>
      <View style={styles.content}>
        <AnimatedCircularProgress
          style={styles.progress}
          size={245}
          width={32}
          rotation={0.25}
          arcSweepAngle={360}
          fill={60}
          tintColor="#2176FF"
          backgroundColor="#131A26"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          childrenContainerStyle={styles.circle}
          children={() => (
            <View
              style={{
                alignItems: "center",
                transform: [{ rotate: "-45deg" }],
              }}
            >
              <Title>2450 ml</Title>
              <Text>60 %</Text>
            </View>
          )}
        />
        <View View style={styles.addContainer}>
          <Title style={{ marginHorizontal: 70 }}>
            + Add a portion of water
          </Title>
          <Button
            icon="cup-water"
            mode="contained"
            onPress={() => addWater(waterCup)}
          >
            Cup
          </Button>
          <Button
            icon="bottle-wine"
            mode="contained"
            onPress={() => addWater(waterBottle)}
          >
            Bottle
          </Button>
          <Button
            icon="water-outline"
            mode="contained"
            onPress={() => setIsCustomDialogVisible(true)}
          >
            Something else
          </Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginTop: 50,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  addContainer: {
    flex: 1,
    alignContent: "space-between",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttons: {
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 181,
    height: 181,
    borderRadius: 120,
    borderWidth: 5,
    backgroundColor: "#27354d",
    borderColor: "#0051d4",
    borderTopLeftRadius: 10,
    borderBottomWidth: 10,
    borderRightWidth: 10,
    transform: [
      {
        rotate: "45deg",
      },
    ],
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10.0,
    elevation: 10,
  },
  progress: {
    width: 264,
    height: 264,
    marginBottom: 10,
    borderRadius: 300,
    borderWidth: 10,
    borderColor: "#0051d4",
    overflow: "hidden",
  },
});

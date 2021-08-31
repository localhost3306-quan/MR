import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Modal,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ModalPicker } from "./ModalPicker";
import { useState } from "react";

export default function Suggest({ navigation }) {
  const [chooseDataGender, setchooseDataGender] = useState("Male");
  const [weight, setWeight] = useState("");
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  };

  const setData = (option) => {
    setchooseDataGender(option);
  };
  const weightValue = weight;
  const genderValue = chooseDataGender;
  // const [target, setTarget] = useState(0);
  let target = 0;
  if (genderValue == "Female") {
    if (weightValue < 43) {
      target = 900;
      // setTarget(900);
    }
    if (weightValue >= 40 && weightValue < 43) {
      target = 960;
      // setTarget(960);
    }
    if (weightValue >= 43 && weightValue < 50) {
      target = 1200;
      // setTarget(1200);
    }
    if (weightValue >= 50 && weightValue < 64) {
      target = 1440;
      // setTarget(1440);
    }
    if (weightValue >= 64 && weightValue < 74) {
      target = 1860;
      // setTarget(1860);
    }
    if (weightValue >= 74 && weightValue < 84) {
      target = 2040;
      // // setTarget(2040);
    }
    if (weightValue >= 84 && weightValue < 90) {
      target = 2240;
      // setTarget(2240);
    }
    if (weightValue > 90) {
      target = 2600;
      // setTarget(2600);
    }
  }
  if (genderValue == "Male") {
    if (weightValue < 43) {
      target = 1100;
      // setTarget(1100)
    }
    if (weightValue >= 40 && weightValue < 43) {
      target = 1230;
      // setTarget(1230)
    }
    if (weightValue >= 43 && weightValue < 50) {
      target = 1500;
      // setTarget(1500)
    }
    if (weightValue >= 50 && weightValue < 64) {
      target = 1740;
      // setTarget(1740)
    }
    if (weightValue >= 64 && weightValue < 74) {
      target = 2260;
      // setTarget(2260)
    }
    if (weightValue >= 74 && weightValue < 84) {
      target = 2240;
      // setTarget(2400)
    }
    if (weightValue >= 84 && weightValue < 90) {
      target = 2540;
      // setTarget(2540)
    }
    if (weightValue > 90) {
      target = 2600;
      // setTarget(2600)
    }
  }


  return (
    <View style={styles.suggestContainer}>
      <View style={styles.suggestTitleWrapper}>
        <Text style={styles.suggestTitle}>Hi</Text>
        <Text style={styles.suggestSubTitle}>
          Please tell us more about yourself
        </Text>
      </View>

      <View style={styles.suggestInputWrapper}>
        <Text style={styles.suggestText}> Weight (kg)</Text>
        <TextInput
          style={styles.suggestInputText}
          keyboardType="numeric"
          maxLength={2}
          value={weightValue}
          onChangeText={(weightValue) => setWeight(weightValue)}
        ></TextInput>

        <SafeAreaView style={styles.selectionWrapper}>
          <Text style={styles.suggestText}>Select Gender </Text>
          <TouchableOpacity
            style={styles.selectionPick}
            onPress={() => changeModalVisibility(true)}
          >
            <Text style={styles.suggestText}>{chooseDataGender}</Text>
          </TouchableOpacity>
          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            onRequestClose={() => changeModalVisibility(false)}
          >
            <ModalPicker
              changeModalVisibility={changeModalVisibility}
              setData={setData}
            />
          </Modal>
        </SafeAreaView>
        <Text style={styles.suggestResult}>Your goal is : {target}(ml)</Text>

        <TouchableOpacity
          TouchableOpacity
          style={styles.calculateButton}
          onPress = {
            () => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('Home', {
                name: 'Jane',
              });
            }
          }
        >
          <Text style={styles.generatorText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  suggestTitleWrapper: {
    backgroundColor: "#131A26",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  suggestTitle: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 40,
    marginTop: 20,
    marginLeft: 45,
  },
  suggestSubTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    marginLeft: 45,
    marginTop: 20,
  },

  suggestInputWrapper: {
    paddingTop: 40,
    backgroundColor: "#131A26",
    alignItems: "center",
    justifyContent: "center",
  },
  suggestText: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  suggestResult: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 30,
    paddingBottom: 30,
  },
  suggestInputText: {
    borderColor: "#FFFFFF",
    backgroundColor: "#131A26",
    height: 40,
    width: 300,
    borderWidth: 3,
    marginTop: 20,
    borderRadius: 10,
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
  },
  selectionPick: {
    backgroundColor: "#131A26",
    width: 300,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#FFFFFF",
    borderWidth: 3,
    marginTop: 20,
  },
  selectionWrapper: {
    marginTop: 30,
    marginBottom: 20,
  },
  calculateButton: {
    backgroundColor: "#2176FF",
    width: 200,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 150,
  },
  generatorText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 25,
  },
});

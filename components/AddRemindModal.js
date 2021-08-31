import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Title, TextInput, Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddRemindModal() {
  const [text, setText] = React.useState("");

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
        <AntDesign name="close" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Create Notification</Text>
      <View style={styles.input}>
        <TextInput
          mode="outlined"
          outlineColor="#2176FF"
          underlineColor="white"
          labelColor="#2176FF"
          placeholder="Write Title"
          placeholderTextColor="white"
          right={<TextInput.Affix text="/40" />}
        />
      </View>

      <View style={styles.dateTimePicker}>
        <View View style={styles.datePicker}>
          <Button
            Button
            icon="calendar-check"
            mode="contained"
            onPress={showDatepicker}
          >
            Pick Date
          </Button>
        </View>
        <View style={styles.datePicker}>
          <Button
            Button
            icon="timer"
            mode="contained"
            onPress={showTimepicker}
          >
            Pick Time
          </Button>
        </View>

        <View style={styles.create}>
          <Button
            Button
            icon="water-outline"
            mode="contained"
            onPress={showTimepicker}
            style={styles.btn}
            labelStyle = {styles.lb}
          >
            Create Notification
          </Button>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#131A26",
    marginTop: 0,
    paddingTop: 0,
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    paddingTop: 50,
    color: "#2176FF",
  },
  input: {
    height: 120,
    width: 350,
    paddingTop: 20,
  },
  datePicker: {
    marginTop: 20,
    width: 150,
  },
  btn: {
    paddingTop: 7,
    paddingBottom: 7
  },

  create: {
    paddingTop: 20,
    width: 300,
  },
  dateTimePicker: {
    justifyContent: "center",
    alignItems: "center",
  },
  lb:{
    fontSize: 18,
    fontWeight: "bold",
  }
});

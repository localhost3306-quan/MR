import React from "react";
import * as firebase from "firebase";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { Title } from "react-native-paper";
import { CalendarList } from "react-native-calendars";
import { today } from "../utilities";
import DateData from "./DateData";


export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Title> Water intake history </Title>
      <View style={styles.calendar}>
        <CalendarList
          theme={{
            calendarBackground: "#131A26",
            textSectionTitleColor: "#ffffff",
            selectedDayTextColor: "#ffffff",
            selectedDayBackgroundColor: "#2176FF",
            dayTextColor: "#ffffff",
            monthTextColor: "#ffffff",
            textMonthFontWeight: "bold",
          }}
          firstDay={1}
          horizontal={true}
          pagingEnabled={true}
        
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        alignItems: 'center',
    },
    calendar: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    buttons: {
        flex: 0,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        justifyContent: 'space-evenly',
    },
});
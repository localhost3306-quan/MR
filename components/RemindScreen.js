import React, {
  useState
} from "react";
import { List, TouchableRipple, Button } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
} from "react-native";
import AddRemindModal from "./AddRemindModal";

export default function RemindScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <AddRemindModal/>


      </Modal>

      <View style={styles.List}>
        <TouchableOpacity style={styles.listRemind}>
          <List.Item
            title="Drink Water"
            left={() => <List.Icon icon="clock-outline" color="#2176FF" />}
            description="18:30"
            right={() => <List.Icon icon="delete" color="#2176FF" />}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listRemind}>
          <List.Item
            title="Drink Water"
            left={() => <List.Icon icon="clock-outline" color="#2176FF" />}
            description="18:30"
            right={() => <List.Icon icon="delete" color="#2176FF" />}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listRemind}>
          <List.Item
            title="Drink Water"
            left={() => <List.Icon icon="clock-outline" color="#2176FF" />}
            description="18:30"
            right={() => <List.Icon icon="delete" color="#2176FF" />}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listRemind}>
          <List.Item
            title="Drink Water"
            left={() => <List.Icon icon="clock-outline" color="#2176FF" />}
            description="18:30"
            right={() => <List.Icon icon="delete" color="#2176FF" />}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listRemind}>
          <List.Item
            title="Drink Water"
            left={() => <List.Icon icon="clock-outline" color="#2176FF" />}
            description="18:30"
            right={() => <List.Icon icon="delete" color="#2176FF" />}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper}>
        <Button Button icon = "alarm-plus"
        mode = "contained"
        onPress = {
          () => setModalVisible(true)
        } >
          Add
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  List: {
    height: 580,
  },

  buttonWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";


  const OPTIONS = ["Male", "Female"];
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;

  const ModalPicker = (props) => {
    const onPressItem = (option) => {
      props.changeModalVisibility(false);
      props.setData(option);
    };
    const option = OPTIONS.map((item, index) => {
      return (
        <TouchableOpacity
          style={styles.option}
          key={index}
          onPress={() => onPressItem(item)}
        >
          <Text style={styles.textItem}>{item}</Text>
        </TouchableOpacity>
      );
    });


    return (
      <TouchableOpacity
        onPress={() => props.changeModalVisibility(false)}
        style={styles.container}
      >
        <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 2 }]}>
          <ScrollView  style={[styles.scroll]}>
          
        <Text style={styles.textScroll}> {option}</Text> 
          
          </ScrollView>
        </View>
      </TouchableOpacity>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#9BD1FA",
    borderRadius: 10,
  },

  option: {
   alignItems: "center"
  },
  textItem: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  textScroll:{
       fontSize: 20,
        fontWeight: "bold",
        color: "white",
  }
});

export { ModalPicker };

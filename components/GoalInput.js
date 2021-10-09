import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enterGoal, setEnterGoal] = useState("");

  const enterTextHandler = (text) => {
    setEnterGoal(text);
  };

  const sendGoalHandler = () => {
    props.onEnter(enterGoal);
    setEnterGoal("");
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textContainer}
          value={enterGoal}
          onChangeText={enterTextHandler}
        />
        <View style={styles.buttonContainerStyle}>
          <View style={styles.buttonStyle}>
            <Button title="Cancle" color="pink" onPress={props.onCancel} />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title="Submit"
              onPress={sendGoalHandler}
              // {props.onEnter.bind(this, enterGoal)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainerStyle: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: "50%",
  },
  textContainer: {
    height: 40,
    width: "80%",
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  buttonStyle: {
    width: "40%",
  },
});

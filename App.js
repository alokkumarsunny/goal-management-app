import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/goalItem";

export default function App() {
  const [listGoal, setListGoal] = useState([]);
  const [isGoalInput, setIsGoalInput] = useState(false);

  const renterList = (enterGoalValue) => {
    setListGoal((oldList) => [
      ...oldList,
      { key: Math.random().toString(), value: enterGoalValue },
    ]);
    setIsGoalInput(false);
  };

  const onDeleteItemHandler = (enterGoalId) => {
    setListGoal((currentList) =>
      currentList.filter((goal1) => goal1.key !== enterGoalId)
    );
  };

  const isGoalVisibleHandler = (value) => {
    setIsGoalInput(value);
  };

  const onCancleHandler = () => {
    setIsGoalInput(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Enter Goal" onPress={() => isGoalVisibleHandler(true)} />
      <GoalInput
        isVisible={isGoalInput}
        onEnter={renterList}
        onCancel={onCancleHandler}
      />
      <FlatList
        data={listGoal}
        renderItem={(renderData) => (
          <GoalItem item={renderData.item} onDelete={onDeleteItemHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    marginTop: 20,
  },
});

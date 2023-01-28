import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoal, setCourseGoal] = useState([])


  function addGoals(enteredGoalText) {
    setCourseGoal(currentCourseGoal => [...currentCourseGoal, { text: enteredGoalText, key: (enteredGoalText + Math.random.toString) }])
  };

  function deleteGoalHandle(itemId) {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.itemId !== itemId)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoals} />
      <View style={styles.goalsConatiner}>
        <FlatList data={courseGoal} renderItem={itemData => {
          return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandle} id={itemData.item.id} />
        }} />


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center'
  },
  goalsConatiner: {
    flex: 4
  }
});

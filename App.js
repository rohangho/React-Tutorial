import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoal, setCourseGoal] = useState([])

  function startAddGoalHandle() {
    setModalIsVisible(true)
  }

  function stopAddGoalHandle() {
    setModalIsVisible(false)
  }

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
      <Button title='Add New Goal' color={"345635"} onPress={startAddGoalHandle} />
      {modalIsVisible && <GoalInput onAddGoal={addGoals} isVisible = {modalIsVisible} cancelModal={stopAddGoalHandle}/>}
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

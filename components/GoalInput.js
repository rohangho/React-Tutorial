import { Button, FlatList, Text, StyleSheet,TextInput, View } from 'react-native';
import { useState } from 'react';

function GoalInput(props)
{
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalHandler(enteredText) {
        setEnteredGoalText(enteredText)
      };

      function addGoals() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
      };

    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder='YOur Goal'
          style={styles.textInputStyle}
          onChangeText={goalHandler} 
          value={enteredGoalText}/>

        <Button title='Add  Goal'
          onPress={addGoals} />
      </View>
    )
};

export default GoalInput


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 24,
        borderBottomWidth: 2,
        borderBottomColor: "#cccccc"
      },
      textInputStyle: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 2
      },
})
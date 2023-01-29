import { Button, FlatList, Text, StyleSheet,TextInput, View ,Pressable,Modal} from 'react-native';
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
        cancelModalfunc()
      };

      function cancelModalfunc()
      {
        props.cancelModal()
      }

    return (
      <Modal visible={props.isVisible} animationType ="slide">
        <View style={styles.inputContainer}>
        <TextInput placeholder='YOur Goal'
          style={styles.textInputStyle}
          onChangeText={goalHandler} 
          value={enteredGoalText}/>
       
          <View style = {styles.buttonDirection}>
          <Button title='Add_Goal'
          onPress={addGoals} />
          <Button title='Cancel' onPress={cancelModalfunc}/>
          </View>
          </View>
      </Modal>

    )
};

export default GoalInput


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
      buttonDirection:{
        flexDirection : 'row'
      }
})
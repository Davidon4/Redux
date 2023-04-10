import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import React from 'react';  
import { useSelector, useDispatch } from 'react-redux';
import {counter, increment, decrement} from './redux/CounterSlice';

export default function CounterView() {
    const counterState = useSelector(counter)
    const dispatch = useDispatch();

    const onPressIncrement = () => {
        dispatch(increment());
    };

    const onPressDecrement = () => {
        dispatch(decrement());
    };
  return (
    <View style={styles.container}>
        <SafeAreaView>
        <View style={styles.itemContainer}>
      <Text style={styles.countTitle}>{counterState.counter}</Text>

      <View style={styles.buttonContainer}>
      <Button title='Increment' color="#841584" onPress={onPressIncrement}/>
      <Button title='Decrement' color="#f194ff" onPress={onPressDecrement}/>
      </View>
      </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2d2d2d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemContainer:{
        alignItems: 'center',
    },
    buttonContainer:{
        flexDirection: 'row'
    },
    countTitle:{
        fontSize: 30
    }
});

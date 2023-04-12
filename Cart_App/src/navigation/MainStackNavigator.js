import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';

 function MainStackNavigator() {
    return (
       <NavigationContainer>
        {AppStack()}
       </NavigationContainer>
    )
}

export default MainStackNavigator;
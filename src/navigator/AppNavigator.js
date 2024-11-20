
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from '../screens/SplashScreen'
import EntryPage from '../screens/EntryPage'
import HomeScreen from '../screens/HomeScreen'
import ScorePage from '../screens/ScorePage'


const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen component={SplashScreen} name='splash' options={{headerShown : false}}/>
            <Stack.Screen component={EntryPage} name='entry' options={{headerShown : false}}/>
            <Stack.Screen component={HomeScreen} name='home' options={{headerShown : false}}/>
            <Stack.Screen component={ScorePage} name='score' options={{headerShown : false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})
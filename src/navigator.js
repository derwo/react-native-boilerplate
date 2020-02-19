import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigator from './views/Home/Home.navigator'
import BlankNavigator from './views/Blank/Blank.navigator'
import LoginNavigator from './views/Login/Login.navigator'

const Tab = createBottomTabNavigator()

function BottomTabs () {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Blank1' component={BlankNavigator} />
      <Tab.Screen name='Blank2' component={BlankNavigator} />
      <Tab.Screen name='Home' component={HomeNavigator} />
      <Tab.Screen name='Blank3' component={BlankNavigator} />
      <Tab.Screen name='Blank4' component={BlankNavigator} />
    </Tab.Navigator>
  )
}

function Switch () {
  const { isAuthenticated } = useSelector(state => state.Auth)
  return (
    <>
      {
        isAuthenticated
          ? <BottomTabs />
          : <LoginNavigator />
      }
    </>
  )
}

function Navigator () {
  return (
    <NavigationContainer>
      <Switch />
    </NavigationContainer>
  )
}

export default Navigator

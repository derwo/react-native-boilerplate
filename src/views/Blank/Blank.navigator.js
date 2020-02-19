import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Blank from './Blank'

const Stack = createStackNavigator()

function BlankNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Blank' component={Blank} />
    </Stack.Navigator>
  )
}

export default BlankNavigator

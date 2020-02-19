import React from 'react'
import { View, Button, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/actions'
import Style from './Login.style'

function Login () {
  const dispatch = useDispatch()
  const { isLogging } = useSelector(state => state.Auth)
  return (
    <View style={Style.Login}>
      {
        isLogging
          ? <ActivityIndicator />
          : <Button title='Login' onPress={() => dispatch(login({ username: 'John' }))} />
      }
    </View>
  )
}

export default Login

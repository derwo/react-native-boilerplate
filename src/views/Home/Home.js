import React from 'react'
import { View, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions'
import Style from '../Home/Home.style'

function Home () {
  const dispatch = useDispatch()
  return (
    <View style={Style.Home}>
      <Button title='Logout' onPress={() => dispatch(logout())} />
    </View>
  )
}

export default Home

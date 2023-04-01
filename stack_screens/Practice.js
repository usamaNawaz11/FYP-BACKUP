import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import Context_api from './Context_Api'
export default function Practice() {
    const{val1}=useContext(Context_api);
  return (
    <View>
      <Text>value is :{val1}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
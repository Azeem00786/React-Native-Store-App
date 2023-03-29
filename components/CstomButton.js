import React, { useState } from 'react'
import { Button, View, Text } from 'react-native'

export const CstomButton = () => {
  const [number, setNumber] = useState(0)
  const increamentHandler = () => {
    setNumber(num => num + 1)
  }

  const decreamentHandler = () => {
    if (number > 0) {
      setNumber(num => num - 1)
    }
  }

  return (
    <View style={{
      alignItems: 'center',
      flexDirection: 'row-reverse',
      width: 70,
      justifyContent: 'space-between',


    }}>
      <Button title='+' onPress={increamentHandler} color='black' />
      <Text style={{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
      }}>{number}</Text>
      <Button title='-' onPress={decreamentHandler} color='black' />

    </View>
  )
}
export default CstomButton;
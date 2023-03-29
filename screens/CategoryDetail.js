import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const CategoryDetail = () => {
    const [fetchData, setFetchData] = useState()
  fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => console.log('json'))
      
  return (
    <View style={styles.mainDetailsContainer}>
        {
        //    console.log(fetchData)
        }
      <Text>category</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    mainDetailsContainer:{
        flex:1,
        justifyContent:'center',
       alignItems:'center'
    }
})
export default CategoryDetail
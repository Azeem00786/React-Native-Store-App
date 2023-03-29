
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import {StackNavigator} from 'react-navigation';
export const Categories = () => {
 const navigation = useNavigation()
  const categoryDetailsPage = () =>{
    navigation.navigate("CategoryDetail")
  }
 const newDataCategories = dataCategories.map(itm => {
  console.log(itm.title.length)
  for (let i = 0; i < itm.title.length; i++) {
    itm.title.split('\n');
    console.log('title',itm.title.split('\n').length)
  }
 })
 console.log('new-> ',newDataCategories)
  return (
   <FlatList
      data={dataCategories}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      // onTouchStart={()=>alert('hii')}
      renderItem={({ item }) => (
        <View style={styles.bannerContainer}>
          <TouchableOpacity onPress={categoryDetailsPage}>
          <Image
            style={styles.image}
            source={item.image}
            resizeMode="cover"
          />
          </TouchableOpacity>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
   />
  )
}
const dataCategories = [
    { id: '1', image: require('../test1.png'), title: 'category1' },
    { id: '2', image: require('../test2.png'), title: 'category2' },
    { id: '3', image: require('../test3.png'), title: 'category3' },
    { id: '4', image: require('../test5.png'), title: 'category4' },
    { id: '5', image: require('../test2.png'), title: 'category5' },
    { id: '6', image: require('../test2.png'), title: 'category6' },
    // Add more items to the data array
  ];
  
  const styles = StyleSheet.create({
    bannerContainer: {
      alignItems: 'center',
      paddingTop: 30,
      paddingLeft: 15,
     
    },
    image: {
      width: 90,
      height: 90,
      borderRadius:5,
      // aspectRatio:1
      borderColor:'gray',
      // borderWidth:1,
      
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop:2,
    },
  });
export default Categories;
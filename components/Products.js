import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Image, Text, ScrollView, Button } from 'react-native'
import { Modal } from 'react-native'
import CstomButton from './CstomButton'
export const Products = () => {
  return (
    <FlatList
      data={dataProducts}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      pagingEnable={true}
      renderItem={({ item }) => (

        <View style={styles.productMain}>
          
            {/* <Image
              style={styles.itemImage}
              source={item.image}
              resizeMode="cover"
            /> */}
          <View style={{
            flexDirection:'row',
          }}>
          <View style={styles.itemInfoStyle}>
            <Text style={styles.item} >{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={{fontWeight:'bold', color:'black', fontSize:16, marginTop:5}}>{item.itemPrice} Rs</Text>
          </View>
          <View style={{
            justifyContent:'center'
           
          }}>
            <CstomButton/> 
            </View>
        </View>
        </View>
      )}
    />
  )
}
const dataProducts = [
  { id: '1', image: require('../test1.png'), title: 'Chicken Tikka', description:'good in test', itemPrice:100 },
  { id: '2', image: require('../test2.png'), title: 'Paneer Tikka', description:'good in test', itemPrice:120},
  { id: '3', image: require('../test3.png'), title: 'Paneer Butter', description:'good in test', itemPrice:90 },
  { id: '4', image: require('../test5.png'), title: 'Half Biryani', description:'good in test', itemPrice:80 },
  { id: '5', image: require('../test2.png'), title: 'Bread', description:'good in test', itemPrice:95},
  { id: '6', image: require('../test2.png'), title: 'Tikka', description:'good in test', itemPrice:110 },
  // Add more items to the data array
];
const styles = StyleSheet.create({
  productMain: {
    marginLeft: 15,
    marginTop: 25,
    paddingTop: 5,
    height: 100,
    width: 370,
    borderRadius: 5,
    shadowColor: 'black',
    borderColor:'#ffffff',
    // borderWidth:1,
    shadowOffset: {width: 1, height:1},
    shadowOpacity: 1,
    elevation:5,
    // backgroundColor:'#F3F3F3'
    backgroundColor:'#ffffff'
  },
  itemInfoStyle: {
    textAlign: 'left',
    paddingLeft:15,
    paddingRight:15,
    width:290
  },
  item:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  description:{
   
  },
  addButton:{
    width:25,
    height:40,
    borderRadius:10,
    marginLeft:295,
    justifyContent:'space-between',
    flexDirection:'row',
    margin:5
    
  },
  itemImage: {
    height: 70,
    width: 70,
    borderColor: 'blue',
    borderWidth: 1,
    marginLeft:15,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'flex-end'
  }
});
export default Products;
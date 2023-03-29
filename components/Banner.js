import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity
}
  from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "./Categories";
import Products from "./Products";
const numColumns = 2;
const size = Dimensions.get('window').width / numColumns;
class BannerClass extends React.Component {

  render() {
    const handleImagePress = () =>{
      alert('hii')
    }
    return (

      
      <View style={styles.mainContainer}>
       
      <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      // onTouchStart={()=>alert('hii')}
      renderItem={({ item }) => (
        <View style={styles.bannerContainer}>
           <TouchableOpacity>
          <Image
            style={styles.image}
            source={item.image}
            resizeMode="cover"
            onPress={handleImagePress}
          />
           </TouchableOpacity>
          {/* <Text style={styles.text}>{item.title}</Text> */}
        </View>
      )}
      keyExtractor={item => item.id}
    />
    <View>
      <Categories/>
    </View>
      <Products/>
    </View>
    
    );
  }
}
const data = [
  { id: '1', image: require('../test1.jpg'), title: 'Banner 1' },
  { id: '2', image: require('../test2.jpg'), title: 'Banner 2' },
  { id: '3', image: require('../test3.jpg'), title: 'Banner 3' },
  { id: '4', image: require('../test5.jpg'), title: 'Banner 4' },
  { id: '5', image: require('../test5.jpg'), title: 'Banner 4' },
  { id: '6', image: require('../test5.jpg'), title: 'Banner 4' },
  // Add more items to the data array
];

const styles = StyleSheet.create({
  mainContainer:{
    // backgroundColor:'gray'
  },
  bannerContainer: {
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft:15,
    // backgroundColor:'gray'
  },
  image: {
    width: 320,
    height: 190,
    borderRadius:10,
    aspectRatio:4/3,
    borderColor:'gray',
    borderWidth:0.5,
    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
export default BannerClass;
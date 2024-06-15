import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}> Whats new in Javascript</Text>
        </View>
        <Image source={{
            uri:'https://www.flattickets.com/blog/wp-content/uploads/2018/07/travel-4813658_640.jpg',
        }} 
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iusto fugiat voluptas dolores provident veritatis, quo voluptatibus laudantium vero, veniam suscipit quaerat quasi labore ipsum facilis officia ullam atque ducimus.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>openWebsite('https://www.flattickets.com/blog/wp-content/uploads/2018/07/travel-4813658_640.jpg')}>
              <Text style={styles.socialLinks}>
                Read More
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openWebsite('https://www.flattickets.com/blog/wp-content/uploads/2018/07/travel-4813658_640.jpg')}>
              <Text style={styles.socialLinks}>
                Follow me
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      fontSize:24,
      fontWeight:'bold',
      paddingHorizontal:8,
    },
    card:{
      width:350,
      height:360,
      borderRadius:6,
      marginVertical:12,
      marginHorizontal:16,
    },
    elevatedCard:{
      backgroundColor:'yellow',
      elevation:3,
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowColor:'#333',
      shadowOpacity:0.4,
    },
    headingContainer:{
      height:40,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    headerText:{
      color:'#000000',
      fontSize:16,
      fontWeight:'600',
    },
    cardImage:{
        height:190,
    },
    bodyContainer:{
      padding:10,
    },
    footerContainer:{
      padding:8,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
    },
    socialLinks:{
      fontSize:14,
      color:'#000000',
      backgroundColor:'#FFFFFF',
      paddingHorizontal:20,
      paddingVertical:6,
      borderRadius:6,
    }
})
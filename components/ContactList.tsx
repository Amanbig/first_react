import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
          {
            "color": "black",
            "category": "hue",
            "type": "primary",
            "code": {
              "rgba": [255,255,255,1],
              "hex": "#000"
            }
          },
          {
            "color": "white",
            "category": "value",
            "code": {
              "rgba": [0,0,0,1],
              "hex": "#FFF"
            }
          },
          {
            "color": "red",
            "category": "hue",
            "type": "primary",
            "code": {
              "rgba": [255,0,0,1],
              "hex": "#FF0"
            }
          },
          {
            "color": "blue",
            "category": "hue",
            "type": "primary",
            "code": {
              "rgba": [0,0,255,1],
              "hex": "#00F"
            }
          },
          {
            "color": "yellow",
            "category": "hue",
            "type": "primary",
            "code": {
              "rgba": [255,255,0,1],
              "hex": "#FF0"
            }
          },
          {
            "color": "green",
            "category": "hue",
            "type": "secondary",
            "code": {
              "rgba": [0,255,0,1],
              "hex": "#0F0"
            }
          },
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({color,category})=>(
          <View key={color} style={styles.userCard}>
            <View style={[{backgroundColor:color},styles.userImage]}>
            </View>
            <View>
            <Text style={styles.userName}>{color}</Text>
            <Text style={styles.userStatus}>{category}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
  },
  container:{
    paddingHorizontal:16,
    marginBottom:4,
  },
  userCard:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:3,
    backgroundColor:'#8D3DAF',
    padding:8,
    borderRadius:10,
  },
  userImage:{
    width:60,
    height:60,
    borderRadius:60/2,
    elevation:3,
    marginRight:14,
  },
  userName:{
    fontSize:16,
    fontWeight:'600',
    color:'#000',
  },
  userStatus:{
    fontSize:12,

  }
})
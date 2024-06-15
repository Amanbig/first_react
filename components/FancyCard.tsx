import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
            uri:'https://www.flattickets.com/blog/wp-content/uploads/2018/07/travel-4813658_640.jpg',
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>
                India Gate
            </Text>
            <Text style={styles.cardLabel}>
                New Delhi
            </Text>
            <Text style={styles.cardDescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi possimus quibusdam iusto, dolorum repellat asperiores! Itaque voluptas fugiat adipisci eius soluta accusamus beatae, porro dolor animi, fuga distinctio odit sapiente.
            </Text>
            <Text style={styles.cardFooter}>
                12 mins away
            </Text>
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
        borderRadius:8,
        marginVertical:12,
        marginHorizontal:16,
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
    },
    cardLabel:{
        color:'#000000',
        fontSize:14,
        marginBottom:6,
    },
    cardDescription:{
        color:'#000000',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1,
    },
    cardFooter:{
        color:'#000000',
        fontSize:14,
    }
})
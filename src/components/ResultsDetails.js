import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

    const ResultsDetails =({result})=>{
    return <View style={styles.container}>
    <Image style={styles.image} source={{uri:result.image_url}}></Image>
    <View style={styles.view}>
        <Text  style={styles.text} numberOfLines={2} ellipsizeMode="middle">{result.title}</Text>
    </View>
    </View>
    };

    const styles=StyleSheet.create({
    container:
    {
        backgroundColor:'#1D78C1',
        marginHorizontal:20,
        marginTop:5,
        marginBottom:20,
    }
  ,
   
    image:
    {
        width:130,
        borderRadius:5 ,
        height:150
    },
    view:
    {   
        backgroundColor:'white',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        

    },
    text:
    {
        backgroundColor:'white',
        fontSize:12,
        flexWrap:'wrap',
        alignContent:"center",
        alignSelf:'center',
        margin:4,
        fontStyle:'italic',
        height:30,
        width:50
    }
});

export default ResultsDetails;
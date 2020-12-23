import React from 'react';
import {View,TextInput,StyleSheet,Button} from 'react-native';

const SearchBarComponent =({term,onTermChange,onTermSubmit})=>{
   
   return <View style={styles.container}>
        <TextInput autoCapitalize="none" autoCorrect={false} placeholderTextColor="#FFF" style={styles.TextInputElement} placeholder="Search" value={term} onChangeText={onTermChange} onEndEditing={onTermSubmit}/>
        <View style={styles.ButtonViewElement}>
        <Button color="#1D78C1"title="GO" onPress={onTermSubmit} borderColor= 'white'/>
        </View>
         </View>
};

const styles=StyleSheet.create({
    container:
    {
        backgroundColor:'#1D78C1',
        marginHorizontal:15,
        marginTop:5,
        flexDirection:'row'
    },
    TextInputElement:
    {
        height: 40,
        width: "85%",
        borderWidth: 1, 
        marginBottom: 10,
        marginTop:10,
        paddingStart:10,
        paddingEnd:10,
        color:'white',
        borderLeftColor:'white',
        borderRightColor:'#1D78C1',
        borderTopColor:'white',
        borderBottomColor:'white',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius:5,
        flex:1,
        fontSize:18
    },
    ButtonViewElement:
    {
        backgroundColor:'#1D78C1',
         borderWidth: 1,
        height: 40, width: "15%",
        marginTop:10,
        borderRightColor:'white',
        borderTopColor:'white',
        borderBottomColor:'white',
        borderLeftColor:'#1D78C1',
        borderTopRightRadius: 5,
        borderBottomEndRadius:5,
    }

   });

 export default SearchBarComponent;
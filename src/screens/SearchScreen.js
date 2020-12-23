import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import  SearchBarComponent  from "../components/SearchBarComponent";
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';
const SearchScreen =(navigation)=>{
const [term,setTerm]=useState('');   
const[searchApi,results,errorMessage]=useResults();
   return <View style={styles.container}>
   <SearchBarComponent term={term} onTermChange={setTerm} onTermSubmit={()=>searchApi(term,1,false)}></SearchBarComponent>
       {errorMessage?<Text>{errorMessage }</Text>:null}
       <Text style={styles.text}>Requesting :https://api.jikan.moe/v3/search/anime?q={term?term:"Hello"}&limit=16</Text>
        <ResultsList results={results} term={term} ></ResultsList>
    </View>
};

const styles=StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:'#1D78C1'
    }
    ,
    text:
    {
        color:'white',
        fontSize:10,
        marginLeft:15
    }
   });

 export default SearchScreen;
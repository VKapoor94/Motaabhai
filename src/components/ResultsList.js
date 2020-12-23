import React,{useState} from 'react';
import {View,Text,StyleSheet,FlatList,ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';

import ResultsDetails from "../components/ResultsDetails";
import useResults from '../hooks/useResults';

const ResultsList =({results,term})=>{
    const[searchApi,errorMessage]=useResults();
    const[loadMore,setloadMore]=useState(false);
    const[pageNumber,setpageNumber]=useState(2);

    onLoadMore = () =>{
        setpageNumber(pageNumber+1);
        term=term?term:"Hello";
        searchApi(term,pageNumber,true);        
      }

    return <View style={styles.flatListElement}>
       <View>
        <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={results}
        numColumns={2}
        keyExtractor={(result)=>result.mal_id}
        renderItem={({item})=>{
            return <ResultsDetails result={item} />
        }}
        onScrollEndDrag={()=>setloadMore(true)}></FlatList>
        {loadMore?<TouchableOpacity
          activeOpacity={0.9}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}         o
          onPress={onLoadMore}>Load More</Text>
        </TouchableOpacity>:<View></View>}
        </View>
    </View>
};

const styles=StyleSheet.create({
    flatListElement:
    {
        marginTop:10,
        flexDirection:'column',
        flexWrap:'wrap',
        marginBottom:110
        
    },loadMoreBtn: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        height:10,
        width:100,
        margin:4
      },
});

export default ResultsList;
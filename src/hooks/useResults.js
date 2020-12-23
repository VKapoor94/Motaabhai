import React,{useState,useEffect} from 'react';
import jikan from '../api/jikan';

export default ()=>{
    const [results,setResults]=useState([]);
    const [errorMessage,setErrorMessage]=useState('');
    const [limit,setLimit]=useState(16);

    const searchApi = async(searchTerm,pageNumber,fromLoadMore)=>{
       try{
        const response =await jikan.get('/anime',
        {
            params:{
                q:searchTerm,
                limit:limit,
                page:pageNumber
            }
            
        });
        if(fromLoadMore)
        {
            setResults(this.results.concat(response.data.results)); 
        }
        else{
            setResults(response.data.results);
        }
            }catch(err)
    {
        setErrorMessage("Something went Wrong");
    }
    }
    
    useEffect(()=>{
        searchApi('Hello',1,false)
    },[]);
    return [searchApi,results,errorMessage];    
};
import React,{useState, useEffect} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native'
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

import useResults from '../hooks/useResults';

const SearchScreen=()=>{
    
    const [term,setTerm]=useState('');
    const [searchApi,results,errorMessage]=useResults();
    

    return(
        <View>
             <SearchBar
              term={term} 
              onTermChange={setTerm}
              onTermSubmit={()=>searchApi(term)}

             />
            {errorMessage ?<Text>{errorMessage}</Text>:null}
           <Text>We have Found {results.length} results</Text>
           <ResultsList title="Cost Effective"/>
           <ResultsList title="Bit Pricier"/>
           <ResultsList title="Big spender"/>
        </View>
    );

};
const styles=StyleSheet.create({});

export default SearchScreen;
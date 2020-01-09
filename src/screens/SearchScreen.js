import React,{useState, useEffect} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native'
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

import useResults from '../hooks/useResults';

const SearchScreen=()=>{

   
    
    const [term,setTerm]=useState('');
    const [searchApi,results,errorMessage]=useResults();

    //console.log(results);

    const filterResultsByPrice=(price)=>{
        return results.filter(result=>{
            return result.price==price;

        });

    };
    

    return(
        <View>
             <SearchBar
              term={term} 
              onTermChange={setTerm}
              onTermSubmit={()=>searchApi(term)}

             />
            {errorMessage ?<Text>{errorMessage}</Text>:null}
           <Text>We have Found {results.length} results</Text>
           <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
           <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
           <ResultsList results={filterResultsByPrice('$$$')} title="Big spender"/>
        </View>
    );

};
const styles=StyleSheet.create({});

export default SearchScreen;
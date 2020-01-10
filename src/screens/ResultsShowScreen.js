import React, { useEffect,useState } from 'react';

import {View,StyleSheet,Text,Image,FlatList}from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen=({navigation})=>{

    const [result,setResult]=useState(null);
    const id=navigation.getParam('id');

    console.log(result);

    const getResult=async id=>{
        const response=await yelp.get(`/${id}`);
       setResult(response.data);
    };

    useEffect(()=>{
        getResult(id);

    },[]);

    if(!result){
        return null;
    }

    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return <Image style={styles.image} source={{uri:item}}/>

                }}
            />
        </View>
    );

};
const styles=StyleSheet.create({
    image:{
        width:300,
        height:200
    }
});
export default ResultsShowScreen;
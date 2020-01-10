import React, { useEffect,useState } from 'react';

import {View,StyleSheet,Text}from 'react-native';
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

    return(
        <View>
            <Text>Result show list</Text>
        </View>
    );

};
const styles=StyleSheet.create({

});
export default ResultsShowScreen;
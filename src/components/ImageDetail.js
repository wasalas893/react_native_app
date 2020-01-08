import React from 'react';

import {Text,View,StyleSheet,Image} from 'react-native';

const ImageDetail=(props)=>{
   
    return(
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>ImageScore- {props.Score}</Text>
        </View>
    ); 
};

const styles=StyleSheet.create({});

export default ImageDetail;
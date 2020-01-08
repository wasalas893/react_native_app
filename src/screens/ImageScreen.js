import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen=()=>{
    return(
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} Score={1}/>
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} Score={2}/>
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} Score={3}/>
        </View>
    );
};

const styles=StyleSheet.create({});

export default ImageScreen;
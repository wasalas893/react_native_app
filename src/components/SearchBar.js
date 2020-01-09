import React from 'react';
import {View,TextInput,StyleSheet,Button} from 'react-native'
import {Feather} from '@expo/vector-icons';

const SearchBar=()=>{
    return(
        <View style={styles.background}>
        <Feather style={styles.iconStyle} name="search" size={30}/>
           <TextInput placeholder="Search" style={styles.InputStyle}/>
        </View>
    );

};
const styles=StyleSheet.create({
    background:{
        marginTop:10,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row'
    },
    InputStyle:{
       
        fontSize:18,
        flex:1

    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }


});

export default SearchBar;
import React from 'react';
import {Text,StyleSheet, View} from 'react-native';

const ComponentsScreen=()=>{
  const name='sunnada';
    return(
        <View>
      
          <Text style={styles.textStyle}>This is component Screen!</Text>
          <Text style={styles.SubtextStyle}>my name is {name}</Text>
        
        </View>

      );
     
};
const styles=StyleSheet.create({
    textStyle:{
        fontSize:30
    },
    SubtextStyle:{
      fontSize:20
    }

});
export default ComponentsScreen;
import React from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';

const HomeScreen = props => {
 


  return(
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button 

      onPress={()=>props.navigation.navigate('Components')}
      title="Go to Component demo"

      />
      <TouchableOpacity onPress={()=>console.log('press the list')}>
        <Text>Go to ListDemo</Text>
        <Text>Go to ListDemo</Text>
        <Text>Go to ListDemo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
 }
});

export default HomeScreen;

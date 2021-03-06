import React from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
 


  return(
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button 

      onPress={()=>navigation.navigate('Components')}
      title="Go to Components Demo"

      />
      <Button
        onPress={()=>navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={()=>navigation.navigate('Image')}
        title="Go to Image Demo"
      />
       <Button
        onPress={()=>navigation.navigate('Counter')} 
        title="Go to Count Demo"
      />
      
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
 }
});

export default HomeScreen;

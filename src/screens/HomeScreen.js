import React from 'react';
import { Text, StyleSheet,View,Button } from 'react-native';

const HomeScreen = () => {
  return(
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button title="Go to Component demo"/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
 }
});

export default HomeScreen;

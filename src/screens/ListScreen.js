import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

const ListScreen=()=>{
  const friend=[
      {name: 'Friend#1'},
      {name: 'Friend#2'},
      {name: 'Friend#3'},
      {name: 'Friend#4'},
      {name: 'Friend#5'},
      {name: 'Friend#6'},

  ];

    return(
        <FlatList
            
            keyExtractor={friend=>friend.name}
            data={friend}
            renderItem={({item})=>{
                return <Text>{item.name}</Text>;
            }}
        />
    );
};

const styles=StyleSheet.create({
    textStyle:{
        marginVertical
    }

});

export default ListScreen;
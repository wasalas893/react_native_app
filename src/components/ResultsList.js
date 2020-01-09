import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import  ResultDetail from './ResultsDetail';

const ResultsList =({title,results})=>{
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={result=>result.id}
                renderItem={({item})=>{
                    return <ResultDetail result={item}/>;
                }}
            />
        </View>
    );

};
const styles=StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:18
    }
});
export default ResultsList;
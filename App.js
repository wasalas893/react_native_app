import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
 {
   Home:HomeScreen,
   


 },
 {
   initialRouteName:'Components',
   defaultNavigationOption:{
     title:'App'
   }
 }
);



export default  createAppContainer(navigator);;
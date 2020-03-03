import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from '../screens/StartScreen';


const ElNopalNavigator = createStackNavigator({
    Start: StartScreen,
    // Test: TestScreen,
    // TestTwo: TestScreenTwo
})


export default createAppContainer(ElNopalNavigator);
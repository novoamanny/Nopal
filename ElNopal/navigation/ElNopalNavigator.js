import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from '../screens/StartScreen';
import CategoryMenuScreen from '../screens/CategoryMenuScreen'


const ElNopalNavigator = createStackNavigator({
    Start: StartScreen,
    CategoryMenu: CategoryMenuScreen,
    // Test: TestScreen,
    // TestTwo: TestScreenTwo
})


export default createAppContainer(ElNopalNavigator);
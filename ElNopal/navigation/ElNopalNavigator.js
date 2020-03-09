import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from '../screens/StartScreen';
import CategoryMenuScreen from '../screens/CategoryMenuScreen'
import MenuItemScreen from '../screens/MenuItemScreen';


const ElNopalNavigator = createStackNavigator({
    Home: StartScreen,
    CategoryMenu: CategoryMenuScreen,
    MenuItem: MenuItemScreen
    // Test: TestScreen,
    // TestTwo: TestScreenTwo
})


export default createAppContainer(ElNopalNavigator);
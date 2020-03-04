import React from 'react';

import {View, Text} from 'react-native';

import CategoryMenuItemCard from './CategoryMenuItemCard';



const CategoryMenu = ({catID}) =>{
    return (
    <View>
        <CategoryMenuItemCard catID={catID}/>
            
        
    </View>
        
    )
}

export default CategoryMenu;
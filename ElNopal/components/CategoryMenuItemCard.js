import React from 'react';

import {View, Text, FlatList} from 'react-native';

import {MENUITEMS} from '../data/menuItem-data';

import MenuItem from './MenuItem'

const CategoryMenuItemCard = ({catID}) =>{

    const renderMenuItem = (itemData) =>{
        return <MenuItem category={itemData.item.category} item={itemData.item}/>
    }

    return(
        <View>
            <FlatList data={MENUITEMS} renderItem={renderMenuItem} numColumns={2}/>
        </View>
    )
}

export default CategoryMenuItemCard;
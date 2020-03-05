import React from 'react';

import {View, Text, FlatList, StyleSheet} from 'react-native';

import {MENUITEMS} from '../data/menuItem-data';

import MenuItem from './MenuItem'

const CategoryMenuItemCard = ({cat}) =>{
    

    const renderMenuItem = (itemData) =>{

        if(cat === 'c1'){
            if(itemData.item.category === 'App'){
                return <MenuItem  item={itemData.item}/>
            }
        }
        if(cat === 'c2'){
            if(itemData.item.category === 'SS'){
                return <MenuItem  item={itemData.item}/>
            }
        }
        if(cat === 'c3'){
            if(itemData.item.category === 'Ench'){
                return <MenuItem  item={itemData.item}/>
            }
        }
        if(cat === 'c4'){
            if(itemData.item.category === 'Faj'){
                return <MenuItem  item={itemData.item}/>
            }
        }
        if(cat === 'c5'){
            if(itemData.item.category === 'Ptll'){
                return <MenuItem  item={itemData.item}/>
            }
        }
        
        return null
    }

    return(
        <View style={styles.container}>
            <FlatList data={MENUITEMS} renderItem={renderMenuItem} numColumns={1}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 20,
        
    }
})

export default CategoryMenuItemCard;
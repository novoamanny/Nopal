import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import CategoryMenuItemCard from './CategoryMenuItemCard';




const CategoryMenu = ({cat, navigation}) =>{
    
    return (
    <View style={styles.categoryMenuContainer}>
        <CategoryMenuItemCard cat={cat} navigation={navigation}/>

            
        
    </View>
        
    )
}

const styles = StyleSheet.create({
    categoryMenuContainer:{
        
    }
})

export default CategoryMenu;
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import CategoryMenuItemCard from './CategoryMenuItemCard';




const CategoryMenu = ({cat}) =>{
    
    return (
    <View style={styles.categoryMenuContainer}>
        <CategoryMenuItemCard cat={cat}/>

            
        
    </View>
        
    )
}

const styles = StyleSheet.create({
    categoryMenuContainer:{
        alignSelf: "center"
    }
})

export default CategoryMenu;
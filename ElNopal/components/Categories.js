import React from 'react';

import {View, Text, ImageBackground, Image, FlatList, StyleSheet} from 'react-native'

import {CATEGORIES} from '../data/category-data';

import CategoriesCard from '../components/CategoriesCard';

const Categories = ({navigation}) =>{

    const renderDataHandle = (itemData) =>{
        return <CategoriesCard itemData={itemData} navigation={navigation}/>
    }

    return(
        <View style={styles.buttons}>
            <FlatList data={CATEGORIES} renderItem={renderDataHandle}/>
        </View>
    )
}


const styles = StyleSheet.create({
    buttons:{
        
        marginBottom: 250
    },
    image:{
        alignSelf: "stretch",
        height: 200
    }
})


export default Categories;
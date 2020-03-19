import React from 'react';

import {View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';



const CategoriesCard = ({itemData, navigation}) =>{
    return(
        <TouchableOpacity style={styles.card} onPress={() =>{
            navigation.push('CategoryMenu',{
                categoryId: itemData.item.id
            });
        }}>
            <ImageBackground style={styles.cardImage} source={itemData.item.image}>
                <Text style={styles.text}>{itemData.item.title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        
    },
    cardImage:{
        alignSelf: "stretch",
        height: 160,
        marginVertical: 1,
        justifyContent: "center",
        
        overflow: 'hidden'
    },
    text:{
        alignSelf: 'center',
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        
    }
})



export default CategoriesCard;
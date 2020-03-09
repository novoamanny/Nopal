import React from 'react';

import {View, Image, StyleSheet} from 'react-native';


const ItemImage = ({image}) =>{
    return(
        <Image style={styles.image} source={image}></Image>
    )
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 280,
        
    }
})

export default ItemImage;
import React from 'react';

import {View, Image, StyleSheet, Dimensions} from 'react-native';


const ItemImage = ({image}) =>{
    return(
        <Image style={styles.image} source={image}></Image>
    )
}

const styles = StyleSheet.create({
    image:{
        width: Dimensions.get('window').width < 600 ? '100%' : '80%',
        height: Dimensions.get('window').width > 600 ? 380 : 280,
        alignSelf: Dimensions.get('window').width > 600 ? 'center' : 'stretch',
        marginTop: Dimensions.get('window').width > 600 ? 10 : 0,
        borderRadius: Dimensions.get('window').width > 600 ? 10 : 0
        
    }
})

export default ItemImage;
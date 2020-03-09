import React from 'react';

import {View, Text, StyleSheet} from 'react-native'

const ItemPrice = ({price}) =>{
    return(
        <View style={styles.textContainer}>
            <Text style={styles.text}>{price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer:{
         alignSelf: "center",
         
    },
    text:{
        fontSize: 20
    }
})

export default ItemPrice
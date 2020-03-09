import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const ItemDesc = ({desc}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{desc}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 30,
        paddingHorizontal: 10,
        

    },
    text:{
        color: '#2f2f2f',
        textAlign: 'center',
        fontSize: 16
    }
})

export default ItemDesc;
import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

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
        fontSize: Dimensions.get('window').width > 600 ? 20 : 16
    }
})

export default ItemDesc;
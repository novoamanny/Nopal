import React from 'react';

import {View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

import {Colors} from '../constants/Colors';

const MenuItem = ({item, navigation}) =>{
    
    const Item = (
        <TouchableOpacity style={styles.menuItemContainer} onPress={() => {
            navigation.push('MenuItem', {item: item});
        }}>
            <ImageBackground style={styles.image} source={item.image}>
                <View style={{backgroundColor: 'rgba(47,47,47, 0.7)'}}>
                    <View style={''}>
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                
                    <View>
                        <Text style={styles.textPrice}>{item.price}</Text>
                    </View>
                </View>
            </ImageBackground>
            
            
            
        </TouchableOpacity>
    )


return Item;

}

const styles = StyleSheet.create({
    menuItemContainer:{
        
        marginVertical: 1,
        backgroundColor: Colors.secondary,
        
        
    },
    image:{
        width: '100%',
        height: 170,
        justifyContent: 'flex-end',
        
        
    },
    text: {
        
        color: '#fff',
        marginVertical: 5,
        fontSize: 18,
        alignSelf: 'center'
        
    },
    
    textPrice: {
        
        color: '#fff',
        marginVertical: 5,
        alignSelf: 'center'
    }
})

export default MenuItem;
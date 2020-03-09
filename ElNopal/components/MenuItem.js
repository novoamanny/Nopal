import React from 'react';

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {Colors} from '../constants/Colors';

const MenuItem = ({item, navigation}) =>{
    
    const Item = (
        <TouchableOpacity style={styles.menuItemContainer} onPress={() => {
            navigation.push('MenuItem', {item: item});
        }}>
            <Image style={styles.image} source={require('../images/desert.jpeg')}/>
            <View style={''}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
            {/* <View>
                <Text style={styles.textDesc}>{item.desc}</Text>
            </View>
            */}
            <View>
                <Text style={styles.textPrice}>{item.price}</Text>
            </View>
            
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
        
        
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
        marginVertical: 5,
        fontSize: 18
        
    },
    textDesc: {
        alignSelf: 'center',
        color: '#fff',
        marginVertical: 5
        
    },
    textPrice: {
        alignSelf: 'center',
        color: '#fff',
        marginVertical: 5
        
    }
})

export default MenuItem;
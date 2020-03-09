import React from 'react';

import {View, Text, TouchableOpacity,Alert} from 'react-native';


const ItemConfirmBtns = ({color, text, handle}) =>{


    return(
        <TouchableOpacity style={{backgroundColor: color, marginTop: 10, padding: 10,}} onPress={() => handle()}>
            <Text style={{alignSelf: 'center', color: '#fff', fontWeight: 'bold', fontSize: 20}}>{text}</Text>
        </TouchableOpacity>
    )
}


export default ItemConfirmBtns;
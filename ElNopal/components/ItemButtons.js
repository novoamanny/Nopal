import React, {useState} from 'react';

import {View, Text, Button, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Colors} from '../constants/Colors';


import ItemConfirmBtns from './ItemConfirmBtns';





const ItemButtons = ({ navigation, itemID, itemName}) =>{

    const [count, SetCount] = useState(0);

    
    
    const addToOrder = () =>{
        Alert.alert(
            'Confirmation',
            `Are you sure you would like to add ${count} ${itemName} to your order?`,
            // Add Buttons in a array
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => navigation.pop()},
            ],
            {cancelable: false},
          );
    }

    const cancelItemChoice = () =>{
        navigation.pop();
    }
    


    return(
        <View style={styles.container}>

            <View style={styles.rowOne} >
                <View style={styles.text}>
                    <Text>Quantity:</Text>
                </View>

                <View>
                    <Text>{count}</Text>
                </View>

                <TouchableOpacity style={styles.buttonAdd} onPress={() => SetCount(count + 1)}>
                    <Icon name='plus' color={Colors.secondary} size={15}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMin} onPress={() => count === 0 ? null : SetCount(count - 1)}>
                    <Icon name='minus' color={'red'} size={15}/>
                </TouchableOpacity>
        
                
            </View>


            <View>
                    
                <ItemConfirmBtns color={Colors.secondary} text={'Add To Order'} handle={addToOrder}/>
                <ItemConfirmBtns color={'red'} text={'Cancel Order'} handle={cancelItemChoice}/>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        
        marginVertical: 30
    },
    rowOne:{
        flexDirection: 'row',
        alignSelf: "center",
        marginVertical: 10
    },
    text:{
        marginHorizontal: 30
    },
    buttonAdd:{
        
        
        
        marginHorizontal: 15
    },
    buttonMin:{
        
        
        marginHorizontal: 15
    },
    addToOrderBtn:{
        alignSelf: "stretch",
        
        
        
    },
    addtext:{
        alignSelf: "center",
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        
    }
})

export default ItemButtons;
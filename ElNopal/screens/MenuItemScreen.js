import React from 'react';

import {View, Text} from 'react-native';
import Layout from '../components/Layout';

import {Colors} from '../constants/Colors';

import ItemDesc from '../components/ItemDesc';
import ItemImage from '../components/ItemImage';
import ItemPrice from '../components/ItemPrice';
import ItemButtons from '../components/ItemButtons';

const MenuItemScreen = ({navigation}) =>{

    const item = navigation.getParam('item');

    return(
        <Layout>
            <ItemImage image={item.image}/>
            <ItemDesc desc={item.desc}/>
            <ItemPrice price={item.price}/>
            <ItemButtons navigation={navigation} itemID={item.id} itemName={item.title}/>
            
        </Layout>
    )
}


MenuItemScreen.navigationOptions = ({navigation}) =>{
    

    const itemName = navigation.getParam('item').title;

    if(itemName){
        
        return {
          headerTitle: itemName,
          headerStyle:{
              backgroundColor: Colors.secondary
          },
          headerTintColor: '#fff'
        };
    }
}

export default MenuItemScreen;
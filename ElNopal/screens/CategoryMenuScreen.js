import React from 'react';

import {View, Text} from 'react-native';

import Layout from '../components/Layout';
import CategoryMenu from '../components/CategoryMenu';

import {CATEGORIES} from '../data/category-data';

import {Colors} from '../constants/Colors';

const CategoryMenuScreen = ({navigation}) =>{
    
    

    const cat = navigation.getParam('categoryId');

    
    
    return (
        <Layout>
            <CategoryMenu cat={cat} navigation={navigation}/>
        </Layout>
    )
}

CategoryMenuScreen.navigationOptions = ({navigation}) =>{
    const catID = navigation.getParam('categoryId');

    const category = CATEGORIES.find(cat => cat.id === catID);

    if(category){
        
        return {
          headerTitle: category.title,
          headerStyle:{
              backgroundColor: Colors.secondary
          },
          headerTintColor: '#fff'
        };
    }
}

export default CategoryMenuScreen;
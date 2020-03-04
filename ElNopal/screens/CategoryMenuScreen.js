import React from 'react';

import {View, Text} from 'react-native';

import Layout from '../components/Layout';
import CategoryMenu from '../components/CategoryMenu';

const CategoryMenuScreen = ({navigation}) =>{
    

    const catID = navigation.getParam('categoryId').item.id;

    

    return (
        <Layout>
            <CategoryMenu catID={catID}/>
        </Layout>
    )
}

export default CategoryMenuScreen
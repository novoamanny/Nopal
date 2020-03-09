import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

import {HeaderButton} from'react-navigation-header-buttons';

import {Ionicons} from '@expo/vector-icons';

const CustomHeaderButton = (props) =>{
    return(
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={20} color={'#fff'}/>
    )
}

const styles = StyleSheet.create({

})


export default CustomHeaderButton;
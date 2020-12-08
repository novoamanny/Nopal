import React from 'react';

import {Text, View, StyleSheet, Image, ImageBackground, ScrollView} from 'react-native';
import logo from '../images/elnopal.png';

import {Colors} from '../constants/Colors';

const Layout = ({children}) =>{
    
    return(
        
            <View style={styles.background}>
                {children}
            </View> 
        
      
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: Colors.primary,
        height: '100%',
        
    }
})




export default Layout;
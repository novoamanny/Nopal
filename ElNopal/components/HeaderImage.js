import React from 'react';

import {Text, Image, ImageBackground, StyleSheet} from 'react-native';


const HeaderImage = () =>{
    return <Image style={styles.size} source={require('../images/elnopal-white.png')}/>
}

const styles = StyleSheet.create({
    size:{
        width: 100,
        height: 100
    }
})

export default HeaderImage;
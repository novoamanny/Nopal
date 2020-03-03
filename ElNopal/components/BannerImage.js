import React from 'react';

import {View, ImageBackground, Text, StyleSheet, Image} from 'react-native'

const BannerImage = () =>{
    return(

        <ImageBackground style={styles.bannerImage} source={require('../images/fajitas-banner.jpg')}>
            <Image style={styles.insideImage} source={require('../images/elnopal-white.png')}/>
        </ImageBackground>
    )

}


const styles = StyleSheet.create({
    bannerImage:{
        alignSelf: "stretch",
        height: 250,
        
    },
    insideImage:{
        width: 250,
        height: 250,
        alignSelf: "center"
        
    }

})


export default BannerImage;
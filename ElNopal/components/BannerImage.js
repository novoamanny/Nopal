import React from 'react';

import {View, ImageBackground, Text, StyleSheet, Image, Dimensions} from 'react-native'

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
        height: Dimensions.get('window').width < 600 ? 250 : 300,
        
        
    },
    insideImage:{
        width: Dimensions.get('window').width < 600 ? 250 : 300,
        height: Dimensions.get('window').width < 600 ? 250 : 300,
        
        alignSelf: "center"
        
    }

})


export default BannerImage;
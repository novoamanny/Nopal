import React from 'react';

import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';

import {MENUITEMS} from '../data/menuItem-data';

import MenuItem from './MenuItem'

const CategoryMenuItemCard = ({cat, navigation}) =>{
    
    

    const renderMenuItem = (itemData) =>{

        
        
        
        if(cat === 'c1'){
            
            if(itemData.category === 'App'){
                console.log(itemData)
                return <MenuItem  item={itemData} navigation={navigation}/>
            }
        }
        if(cat === 'c2'){
            if( itemData.category=== 'SS'){
                return <MenuItem  item={itemData} navigation={navigation}/>
            }
        }
        if(cat === 'c3'){
            
            if(itemData.category === 'Ench'){
                
                return <MenuItem  item={itemData } navigation={navigation}/>
            }
        }
        if(cat === 'c4'){
            if(itemData.category === 'Faj'){
                return <MenuItem  item={itemData} navigation={navigation}/>
            }
        }
        if(cat === 'c5'){
            if(itemData.category=== 'Ptll'){
                return <MenuItem  item={itemData} navigation={navigation}/>
            }
        }
        if(cat === 'c6'){
            if(itemData.category=== 'Esp'){
                return <MenuItem  item={itemData} navigation={navigation}/>
            }
        }
        if(cat === 'c7'){
            if(itemData.category=== 'LS'){
                return <MenuItem  item={itemData} navigation={navigation}/>
            }
        }
        if(cat === 'c8'){
            if(itemData.category=== 'Veg'){
                return <MenuItem  item={itemData} navigation={navigation}/>
            }
        }
        if(cat === 'c9'){
            if(itemData.category=== 'BD'){
                return <MenuItem  item={itemData} navigation={navigation}/>
            }
        }
        if(cat === 'c9'){
            if(itemData.category=== 'postres'){
                return <MenuItem  item={itemData} navigation={navigation}/>
            }
        }
        
        return null
    }

    return(
        <ScrollView style={styles.container}>
            {/* <FlatList data={MENUITEMS} renderItem={renderMenuItem} numColumns={1}/> */}
            {MENUITEMS.map((item) =>{
                return renderMenuItem(item);
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        
        
    }
})

export default CategoryMenuItemCard;
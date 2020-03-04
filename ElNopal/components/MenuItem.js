import React from 'react';

import {View, Text} from 'react-native';

const MenuItem = ({category, item}) =>{

    let itemInfo;

    if(category === 'App'){
        itemInfo = item.title
    }

return <Text>{itemInfo}</Text>;

}

export default MenuItem;
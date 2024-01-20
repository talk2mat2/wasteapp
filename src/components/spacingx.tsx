import React from 'react'
import { View } from 'react-native';
import {ScaledSheet,scale} from 'react-native-size-matters';
type props={
width:number
}

const SpacingX:React.FC<props> = ({width=0}) => {
    return ( <View style={{width:scale(width)}}></View> );
}
 
export default SpacingX;
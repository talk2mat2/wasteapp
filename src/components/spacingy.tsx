import React from 'react'
import { View } from 'react-native';
import {ScaledSheet,scale} from 'react-native-size-matters';
type props={
height:number
}

const SpacingY:React.FC<props> = ({height=0}) => {
    return ( <View style={{height:scale(height)}}></View> );
}
 
export default SpacingY;
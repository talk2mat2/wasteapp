import React from 'react';
import {Pressable, StyleProp, Text} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';
import { ViewStyle } from 'react-native';

type props = {
  disabled?: boolean;
  title: string;
  onPress?: () => void;
  others?:StyleProp<ViewStyle>
};

const CustomBtnLight: React.FC<props> = ({disabled, title, onPress,others}) => {
  return (
    <Pressable
      style={{flex: 1}}
      onPress={disabled ? null : onPress ? onPress : null}>
      <LinearGradient
        colors={[colors.brand[50], colors.brand[50]]}
        style={[styles.linearGradient]}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};
// Later on in your styles..
const styles = ScaledSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '50@s',
    borderColor: colors.brand[100],
    borderWidth: 1,
  },
  buttonText: {
    fontSize: '16@s',
    fontFamily: 'Raleway',
    fontWeight: '500',

    textAlign: 'center',
    // margin: 10,
    color: colors.brand[100],
   
    // backgroundColor: 'transparent',
  },
});

export default CustomBtnLight;

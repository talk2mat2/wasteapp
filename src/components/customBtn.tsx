import React from 'react';
import {Pressable, Text} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';

type props = {
  disabled?: boolean;
  title: string;
  onPress?: () => void;
};

const CustomBtn: React.FC<props> = ({disabled, title, onPress}) => {
  return (
    <Pressable style={{flex:1}} onPress={disabled ? null : onPress ? onPress : null}>
      <LinearGradient
        colors={
          disabled
            ? [colors.success[150], colors.success[150]]
            : [colors.success[50], colors.success[100]]
        }
        style={styles.linearGradient}>
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
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: '50@s',
  },
  buttonText: {
    fontSize: '16@s',
    fontFamily: 'Raleway',
    fontWeight: '500',

    textAlign: 'center',
    // margin: 10,
    color: '#ffffff',
    // backgroundColor: 'transparent',
  },
});

export default CustomBtn;

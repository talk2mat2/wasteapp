import React from 'react';
import {View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../constants/colors';
import {Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CustomPicker = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Category</Text>
        <Text style={styles.subtitle}>Select your category</Text>
      </View>
      <AntDesign
        style={{marginLeft: 'auto', alignSelf: 'center'}}
        name="down"
        color={colors.brand[150]}
        size={15}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '50@vs',
    borderRadius: '8@s',
    paddingHorizontal: '20@s',
    paddingTop: 9,
    borderWidth: '1@s',
    borderColor: colors.brand[100],
    flexDirection: 'row',
  },
  title: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    fontSize: '11@s',
    color: colors.brand[100],
    fontStyle:"normal"
  },
  subtitle: {
    fontWeight: '400',
    fontFamily: 'Raleway',
    color: colors.neutral[150],
    fontSize: '15@s',

  },
});
export default CustomPicker;

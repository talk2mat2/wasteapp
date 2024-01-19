import React from 'react';
import {View, TextInput} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../constants/colors';
import {Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface props {
  placeholder?: string;
  title: string;
}

const CustomInput: React.FC<props> = ({placeholder = '', title}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TextInput
        placeholderTextColor={colors.neutral[150]}
        style={[styles.input, styles.subtitle]}
        placeholder={placeholder}
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
    flexDirection: 'column',
  },
  input: {
    flex: 1,
    marginTop: 'auto',
    padding: 0,
    paddingBottom: 7,
    fontFamily: 'Raleway',
  },
  title: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    fontSize: '11@s',
    color: colors.brand[100],
    fontStyle: 'normal',
  },
  subtitle: {
    fontWeight: '400',
    fontFamily: 'Raleway',
    // color: colors.neutral[150],
    fontSize: '15@s',
  },
});
export default CustomInput;

import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface props {
  navigation: NavigationProp<ParamListBase>;
}
const BtnBack: React.FC<props> = ({navigation}) => {
  function onPress() {
    navigation?.goBack();
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AntDesign name="left" color={colors.brand[150]} size={20} />
      </View>
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  container: {
    height: 32,
    width: 32,
    borderRadius: 32,
    backgroundColor: colors.neutral[100],
    justifyContent: 'center',

    alignItems: 'center',
  },
  img: {
    height: 20,
  },
});

export default BtnBack;

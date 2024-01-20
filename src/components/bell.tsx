import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Bell = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="bell"
          color={colors.brand[150]}
          size={scale(20)}
        />
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

export default Bell;

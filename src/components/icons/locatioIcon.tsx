import React from 'react';
import {Image, View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../../constants/colors';
const LocationIcon = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../assets/location-marker.png')}
      />
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: colors.brand[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 20,
  },
});

export default LocationIcon;

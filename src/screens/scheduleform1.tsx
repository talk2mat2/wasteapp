import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';
import ScheduleCard from '../components/schedulecard';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import TruckIcon from '../components/icons/truckIcon';
import CustomHeader from '../components/customheader';

interface props {
  navigation: NavigationProp<ParamListBase>;
}

const ScheduleForm1: React.FC<props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeader navigation={navigation} showIcon={false} showNav={true} title="Schedule Pickup" />
      <View style={styles.spacingTop}></View>
      <View style={styles.wrapper}>
      
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.primary[100],
  },
  wrapper: {
    paddingHorizontal: '23@msr',
  },
  spacingX: {
    height: '10@vs',
  },
  spacingTop: {
    height: '40@vs',
  },
});

export default ScheduleForm1;

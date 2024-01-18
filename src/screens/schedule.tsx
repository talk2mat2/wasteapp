import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';
import ScheduleCard from '../components/schedulecard';
import LocationIcon from '../components/icons/locatioIcon';
import TruckIcon from '../components/icons/truckIcon';
import CustomHeader from '../components/customheader';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface props {
  navigation: NavigationProp<ParamListBase>;
}

const Schedule: React.FC<props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        navigation={navigation}
        showIcon={true}
        showNav={true}
        title="Schedule Request"
      />
      <View style={styles.spacingTop}></View>
      <View style={styles.wrapper}>
        <ScheduleCard
          onPress={() => navigation.navigate('scheduleForm1')}
          title="Schedule Pickup"
          icon={<TruckIcon />}
          subTitle="Request for waste pickup at a goal"
        />
        <View style={styles.spacingX}></View>
        <ScheduleCard
          icon={<LocationIcon />}
          title="Schedule Drop-off"
          subTitle="Request for waste drop-off at a goal"
        />
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

export default Schedule;

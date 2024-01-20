import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
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
import CustomPicker from '../components/custompicker';
import CustomInput from '../components/custominput';
import SpacingY from '../components/spacingy';
import CustomDatePicker from '../components/customDatePicker';
import CustomLocation from '../components/customlocation';
import CheckBox from '@react-native-community/checkbox';
import CustomBtn from '../components/customBtn';
import {categoryTypes} from '../constants/mockData';

interface props {
  navigation: NavigationProp<ParamListBase>;
}

const ScheduleForm1: React.FC<props> = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<categoryTypes[]>([]);
  const onChangeCategory = (items: categoryTypes[]) => {
    setSelected(items);
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        navigation={navigation}
        showIcon={false}
        showNav={true}
        title="Schedule Pickup"
      />
      <View style={styles.wrapper}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.spacingTop}></View>
          <CustomPicker onChange={onChangeCategory} navigation={navigation} />
          <SpacingY height={40} />
          <CustomInput
            title="Waste Quantity"
            placeholder="Enter your waste quantities"
          />
          <SpacingY height={40} />
          <CustomDatePicker
            title="Schedule Date"
            placeholder="Enter your preffered schedule date"
          />
          <SpacingY height={40} />
          <CustomLocation
            title="Pickup Location"
            placeholder="Enter your pickup location"
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.text}>Use my current address</Text>
          </View>
          <SpacingY height={57} />
          <View>
            <Text
              style={[styles.text, {fontStyle: 'italic', textAlign: 'center'}]}>
              We’ve added a 10% fee to your waste schedules for {'\n'}your
              convenience.
            </Text>
            <SpacingY height={16} />
            <CustomBtn disabled={true} title="Continue" />
          </View>
        </ScrollView>
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
    flex: 1,
  },
  text: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    color: colors.neutral[150],
    fontSize: '12@s',
  },
  spacingX: {
    height: '10@vs',
  },
  spacingTop: {
    height: '40@vs',
  },
});

export default ScheduleForm1;

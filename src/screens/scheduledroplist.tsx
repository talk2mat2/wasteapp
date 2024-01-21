import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import colors from '../constants/colors';
import {ScaledSheet, scale} from 'react-native-size-matters';
import ScheduleCard from '../components/schedulecard';
import LocationIcon from '../components/icons/locatioIcon';
import TruckIcon from '../components/icons/truckIcon';
import CustomHeader from '../components/customheader';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import DropItem from '../components/dropItem';

interface props {
  navigation: NavigationProp<ParamListBase>;
}

const ScheduleDropList: React.FC<props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        navigation={navigation}
        showIcon={true}
        showNav={true}
        title="Schedule Drop off"
      />
      <View style={styles.spacingTop}></View>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.subtitle}>
            Below are the nearest Drop off locations closest to you
          </Text>
        </View>
        <View style={{marginTop: scale(11)}}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
     
            renderItem={() => <DropItem />}
            // keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.primary[100],
  },
  subtitle: {
    fontWeight: '400',
    fontFamily: 'Roboto',
    color: colors.neutral[50],
    fontSize: '14@s',
    fontStyle: 'normal',
  },
  wrapper: {
    paddingHorizontal: '23@msr',
  },
  spacingX: {
    height: '10@vs',
  },
  spacingTop: {
    height: '13@vs',
  },
});

export default ScheduleDropList;

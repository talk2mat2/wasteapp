import React from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
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
import SpacingY from '../components/spacingy';
import SpacingX from '../components/spacingx';
import CustomBtn from '../components/customBtn';
import CustomBtnLight from '../components/customBtnLight';

interface props {
  navigation: NavigationProp<ParamListBase>;
}
const windowHeight = Dimensions.get('window').height;
const ScheduleDetails: React.FC<props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        navigation={navigation}
        showIcon={false}
        showNav={true}
        title="Schedule Details"
      />
      <View style={styles.spacingTop}></View>
      {/* <View style={styles.wrapper}>
        <View style={styles.content}><Text>d</Text></View>
      </View> */}
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Image
              style={styles.img}
              source={require('../../assets/spred.png')}
            />
            <SpacingX width={6} />
            <Text
              style={{
                fontSize: scale(16),
                fontWeight: '800',
                fontFamily: 'Raleway',
              }}>
              Schedule Details
            </Text>
          </View>
          <SpacingY height={17} />
          <View style={styles.listItems}>
            <Text style={styles.title}>Waste category</Text>
            <Text style={styles.subtitle}> Can, Pet Bottle</Text>
          </View>
          <SpacingY height={14} />
          <View style={styles.listItems}>
            <Text style={styles.title}>Waste category</Text>
            <Text style={styles.subtitle}> 1 - 5 kg</Text>
          </View>
          <SpacingY height={14} />
          <View style={styles.listItems}>
            <Text style={styles.title}>Waste category</Text>
            <Text style={styles.subtitle}> Can, Pet Bottle</Text>
          </View>
          <SpacingY height={14} />
          <View style={styles.listItems}>
            <Text style={styles.title}>Pickup location</Text>
            <Text style={styles.subtitle}>
              Gbagada Phase II, House K, Road 104, Lagos
            </Text>
          </View>
          <SpacingY height={14} />
          <View style={styles.listItems}>
            <Text style={styles.title}>Reminder date</Text>
            <Text style={styles.subtitle}> Dec 14, 2021</Text>
          </View>
        </View>
        <SpacingY height={14} />

        <View style={[styles.content, {maxHeight: scale(251)}]}>
          <View style={styles.header}>
            <Image
              style={styles.img}
              source={require('../../assets/heart.png')}
            />
            <SpacingX width={6} />
            <Text
              style={{
                fontSize: scale(16),
                fontWeight: '800',
                fontFamily: 'Raleway',
              }}>
              Schedule Details
            </Text>
          </View>
          <SpacingY height={17} />
          <View style={styles.listItems}>
            <Text style={styles.title}>Status</Text>
            <Text style={[styles.subtitle, {color: colors.error[50]}]}>
              Pending
            </Text>
          </View>
          <SpacingY height={14} />
          <View style={styles.listItems}>
            <Text style={styles.title}>Accepted by</Text>
            <Text style={styles.subtitle}> Peteru Daniels</Text>
          </View>
          <SpacingY height={14} />
          <View style={styles.listItems}>
            <Text style={styles.title}>Accepted Date</Text>
            <Text style={styles.subtitle}> Dec 07, 2021</Text>
          </View>
          <SpacingY height={14} />
          <View style={styles.listItems}>
            <Text style={styles.title}>Recycling company</Text>
            <Text style={styles.subtitle}>Westman Collections</Text>
          </View>
          <SpacingY height={14} />
          <View style={styles.listItems}>
            <Text style={styles.title}>Phone number</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.img}
                source={require('../../assets/chat.png')}
              /><SpacingX width={7}/>
              <Image
                style={styles.img}
                source={require('../../assets/whatsap.png')}
              />
              <Text style={styles.subtitle}> 0809 456 7891</Text>
            </View>
          </View>
        </View>
        {/* <View style={[styles.content, {maxHeight: scale(251)}]}></View> */}
        <SpacingY height={14} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: scale(40),
          }}>
          <View style={{width: scale(120)}}>
            <CustomBtnLight title="Delete" />
          </View>

          <View style={{width: scale(120)}}>
            <CustomBtn title="Missed" />
          </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItems: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    fontSize: '13@s',
    // color: colors.brand[100],
    fontStyle: 'normal',
  },
  subtitle: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    // color: colors.neutral[150],
    fontSize: '14@s',
    textAlign: 'right',
    flexShrink: 1,
    color: colors.neutral[300],
  },
  content: {
    minHeight: windowHeight / 3,
    elevation: 1,
    paddingTop: '7@s',
    borderRadius: '13@s',
    paddingHorizontal: '18@s',
    backgroundColor: colors.brand[50],
    paddingBottom: '14@s',
  },
  wrapper: {
    paddingHorizontal: '23@msr',
    flex: 1,
  },
  img: {},
  spacingX: {
    height: '10@vs',
  },
  spacingTop: {
    height: '20@vs',
  },
});

export default ScheduleDetails;

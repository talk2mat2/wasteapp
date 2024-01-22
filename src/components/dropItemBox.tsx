import React from 'react';
import colors from '../constants/colors';
import {Image, Pressable, View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {Text} from 'react-native-paper';
import SpacingY from './spacingy';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SpacingX from './spacingx';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface props {
  navigation?: NavigationProp<ParamListBase>;
}
const DropItemBox: React.FC<props> = ({navigation}) => {
  return (
    <Pressable
      onPress={() => navigation?.navigate('dropOffForm')}
      style={{flex: 1}}>
      <View style={styles.container}>
        <View>
          <View>
            <Text
              style={{
                fontSize: scale(14),
                fontWeight: '600',
                fontFamily: 'Raleway',
              }}>
              Lawma Recyclers
            </Text>
          </View>
          <SpacingY height={4} />
          <View>
            <View style={styles.listItems}>
              <EvilIcons color={colors.brand[150]} size={20} name="location" />
              <SpacingX width={4} />
              <Text style={styles.title}>
                3, Olaniyi Street, Idi Oro, Lagos
              </Text>
            </View>
            <SpacingY height={4} />
            <View style={styles.listItems}>
              <AntDesign color={colors.brand[150]} size={16} name="phone" />
              <SpacingX width={7} />
              <Text style={styles.title}>0908 790 8769, 0112 789 8789</Text>
            </View>
            <SpacingY height={4} />
            <View style={styles.listItems}>
              <AntDesign
                color={colors.brand[150]}
                size={16}
                name="clockcircleo"
              />
              <SpacingX width={7} />
              <Text style={styles.title}>9:00am - 4:00pm</Text>
            </View>
            <SpacingY height={4} />
            <View style={styles.listItems}>
              <Entypo color={colors.brand[150]} size={16} name="suitcase" />
              <SpacingX width={7} />
              <Text style={styles.title}>Can, Pet Bottles, Wood, Nylon</Text>
            </View>
          </View>
        </View>
       
      </View>
    </Pressable>
  );
};

export default  DropItemBox;

const styles = ScaledSheet.create({
  container: {
    height: '109@vs',
    paddingTop: '7@s',
    borderRadius: '13@s',
    paddingHorizontal: '18@s',
    backgroundColor: colors.primary[100],
    paddingBottom: '14@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '3@vs',
  },
  title: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    fontSize: '11@s',
    // color: colors.brand[100],
    fontStyle: 'normal',
  },
  listItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

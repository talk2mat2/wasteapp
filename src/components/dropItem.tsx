import React from 'react';
import colors from '../constants/colors';
import {Image, Pressable, View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {Text} from 'react-native-paper';
import SpacingY from './spacingy';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DropItem = () => {
  return (
    <View style={styles.container}>
        <View>

      <View>
        <Text
          style={{
            fontSize: scale(12),
            fontWeight: '600',
            fontFamily: 'Raleway',
          }}>
          Lawma Recyclers
        </Text>
      </View>
      <SpacingY height={4} />
      <View>
        <View style={styles.listItems}>
          <Text style={styles.title}>3, Olaniyi Street, Idi Oro, Lagos</Text>
        </View>
        <SpacingY height={4} />
        <View style={styles.listItems}>
          <Text style={styles.title}>0908 790 8769, 0112 789 8789</Text>
        </View>
        <SpacingY height={4} />
        <View style={styles.listItems}>
          <Text style={styles.title}>9:00am - 4:00pm</Text>
        </View>
        <SpacingY height={4} />
        <View style={styles.listItems}>
          <Text style={styles.title}>Can, Pet Bottles, Wood, Nylon</Text>
        </View>
        
     
      </View>
        </View>
        <AntDesign name="right" color={colors.brand[150]} size={20} />
    </View>
  );
};

export default DropItem;

const styles = ScaledSheet.create({
  container: {
    height: '109@vs',
    elevation: 1,
    paddingTop: '7@s',
    borderRadius: '13@s',
    paddingHorizontal: '18@s',
    backgroundColor: colors.brand[50],
    paddingBottom: '14@s',
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:"3@vs"
  },
  title: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    fontSize: '11@s',
    // color: colors.brand[100],
    fontStyle: 'normal',
  },
  listItems: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

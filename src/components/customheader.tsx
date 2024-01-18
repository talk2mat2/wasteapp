import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../constants/colors';
import BtnBack from './btnBack';
import Bell from './bell';
import {
    NavigationProp,
    ParamListBase,
    useNavigation,
  } from '@react-navigation/native';

interface props {
  title: string;
  showNav: boolean;
  showIcon?: boolean;
  navigation: NavigationProp<ParamListBase>;
}
const CustomHeader: React.FC<props> = ({
  title,
  showNav,
  showIcon = false,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {showNav ? <BtnBack navigation={navigation} /> : <View></View>}

      <Text
        style={{fontSize: scale(16), fontWeight: '800', fontFamily: 'Raleway'}}>
        {title}
      </Text>
      {showIcon ? <Bell /> : <View></View>}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '55@vs',
    paddingHorizontal: '23@s',
    elevation: 1,
    backgroundColor: colors.brand[50],
    paddingVertical: '10@vs',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default CustomHeader;

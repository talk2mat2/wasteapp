import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../constants/colors';
import BtnBack from './btnBack';
import Bell from './bell';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
  ismodalHeader?: boolean;
  onPress?:()=>void
}
const CustomHeader: React.FC<props> = ({
  title,
  showNav,
  showIcon = false,
  navigation,
  ismodalHeader,
  onPress=()=>{}
}) => {
  return (
    <View style={[styles.container,{elevation:ismodalHeader?0:1}]}>
      {showNav ? (
        ismodalHeader ? (
          <Pressable onPress={onPress}>
            <AntDesign name="left" color={colors.brand[150]} size={20} />
          </Pressable>
        ) : (
          <BtnBack navigation={navigation} />
        )
      ) : (
        <View></View>
      )}

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
    height: '51@s',
    paddingHorizontal: '23@s',
    backgroundColor: colors.brand[50],
    paddingVertical: '10@vs',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default CustomHeader;

import React from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface props {
  title: string;
  subTitle: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}
const ScheduleCard: React.FC<props> = ({
  title,
  subTitle,
  icon,
  onPress = () => {},
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        {icon != null && icon}
        <View style={{marginLeft: scale(11)}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subTitle}</Text>
        </View>
        <AntDesign
          style={{marginLeft: 'auto'}}
          name="right"
          color={colors.brand[150]}
          size={20}
        />
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = ScaledSheet.create({
  container: {
    height: '70@vs',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.brand[50],
    borderRadius: scale(10),
    paddingVertical: '20@vs',
    paddingHorizontal: '12@s',
    elevation: 3,
    shadowColor: '#52006A',
  },
  title: {
    fontWeight: '900',
    fontFamily: 'Raleway',
    fontSize: '14@s',
  },
  subtitle: {
    fontWeight: '400',
    fontFamily: 'Raleway',
    color: colors.neutral[150],
    fontSize: '11@s',
    paddingTop: 5,
  },
});
export default ScheduleCard;

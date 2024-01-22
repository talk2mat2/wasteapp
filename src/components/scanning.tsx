import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
  ActivityIndicator,
  Dimensions,
  Pressable,
} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import SpacingX from './spacingx';
import SpacingY from './spacingy';

const windowHeight = Dimensions.get('window').height;
const Scanning: React.FC<{}> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: windowHeight / 3}}>
        <Text style={styles.subtitle}>Searching</Text>
        <SpacingY height={25}/>
        <View style={{alignItems: 'center'}}>
          <Entypo color={colors.success[200]} size={100} name="location-pin" />
        </View>
        <SpacingY height={20}/>
        <Text style={styles.subtitle}>
          Scanning for nearby recycling company...
        </Text>
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    // flex: 1,
    // height: '258@vs',
    // backgroundColor: colors.primary[100],
    height: windowHeight,
    backgroundColor: colors.primary[100],
    borderRadius: '15@s',
    paddingHorizontal: '52@s',
  },
  subtitle: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    textAlign: 'center',
    fontSize: '11@s',
    // color: colors.brand[100],
    fontStyle: 'normal',
  },
});
export default Scanning;

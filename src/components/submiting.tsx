import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../constants/colors';
import CustomBtn from './customBtn';
import {Text, ActivityIndicator} from 'react-native-paper';
import SpacingY from './spacingy';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface propsType {
  hideModal(): void;
  navigation: NavigationProp<ParamListBase>;
}
const Successfull = () => {
  return (
    <View style={styles.container2}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: scale(13),
            marginTop: scale(17),
          }}>
          <Pressable style={{height: 30, width: 30}}>
            <AntDesign
              style={{marginLeft: 'auto', alignSelf: 'center'}}
              name="close"
              color={colors.brand[150]}
              size={15}
            />
          </Pressable>
        </View>
        <SpacingY height={7} />
        <View>
          <Image
            resizeMode="contain"
            style={{width: 120, height: 120, alignSelf: 'center'}}
            source={require('../../assets/verified.gif')}
          />
        </View>
        <View style={{marginTop: 'auto', marginBottom: scale(20)}}>
          <View style={{marginBottom: scale(7)}}>
            <Text style={styles.txt}>Submitted Successfully !</Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: scale(13),
                fontWeight: '400',
                textAlign: 'center',
                color: colors.neutral[200],
              }}>
              You pickup request has been sent
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const LoadingData = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <SpacingY height={20} />
        <View>
          <ActivityIndicator
            color={colors.brand[100]}
            animating={true}
            size={scale(100)}
          />
        </View>
        <View style={{marginTop: 'auto', marginBottom: scale(17)}}>
          <View style={{marginBottom: scale(17)}}>
            <Text style={styles.txt}>Submitting request</Text>
          </View>
          <View style={{height: scale(50)}}>
            <CustomBtn title="Cancel Request" />
          </View>
        </View>
      </View>
    </View>
  );
};

const Submiting = ({hideModal, navigation}: propsType) => {
  const [mounted, setMounted] = React.useState(1);

  const fakeApicall = () => {
    setTimeout(() => {
      setMounted(2);
    }, 8000);
    setTimeout(hideModal, 13000);
    setTimeout(() => {
      navigation.navigate('scheduleDetails');
    }, 16000);
  };

  React.useEffect(() => {
    fakeApicall();
  }, []);
  return mounted == 1 ? <LoadingData /> : <Successfull />;
};
const styles = ScaledSheet.create({
  container: {
    height: '258@vs',
    backgroundColor: colors.brand[50],
    marginHorizontal: 25,
    borderRadius: '15@s',
    paddingHorizontal: '52@s',
  },
  container2: {
    height: '258@vs',
    backgroundColor: colors.brand[50],
    marginHorizontal: 25,
    borderRadius: '15@s',
  },
  img: {},
  txt: {
    fontWeight: '600',
    fontFamily: 'Raleway',
    color: colors.brand[100],
    fontSize: '18@s',
    textAlign: 'center',
  },
});
export default Submiting;

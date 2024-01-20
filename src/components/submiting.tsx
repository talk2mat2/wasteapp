import React from 'react';
import {Image, View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../constants/colors';
import CustomBtn from './customBtn';
import {Text, ActivityIndicator} from 'react-native-paper';
import SpacingY from './spacingy';

const Successfull = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <SpacingY height={20} />
        <View>
          <Image
            resizeMode="contain" 
            style={{width: 150, height: 150,alignSelf:"center"}} 
            source={require('../../assets/verified.gif')}
          />
        </View>
        <View style={{marginTop: 'auto', marginBottom: scale(17)}}>
          <View style={{marginBottom: scale(7)}}>
            <Text style={styles.txt}>Submitted Successfully !</Text>
          </View>
          <View >
            <Text
              style={{
                fontSize: scale(11),
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

const Submiting = () => {
  return <Successfull />;
};
const styles = ScaledSheet.create({
  container: {
    height: '268@vs',
    backgroundColor: colors.brand[50],
    marginHorizontal: 20,
    borderRadius: '10@s',
    paddingHorizontal: '52@s',
  },
  img: {
  
  },
  txt: {
    fontWeight: '600',
    fontFamily: 'Raleway',
    color: colors.brand[100],
    fontSize: '18@s',
    textAlign: 'center',
  },
});
export default Submiting;

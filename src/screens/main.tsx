import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

const Main: React.FC<{}> = () => {
  const Tab = createBottomTabNavigator();
  return <View></View>;
};

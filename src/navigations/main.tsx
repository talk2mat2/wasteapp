import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import MyTabBar from './tabbar';
import Home from '../screens/home';
import Schedule from '../screens/schedule';
import Wallet from '../screens/wallet';
import Chatroom from '../screens/chatroom';
import Account from '../screens/account';
import ScheduleHome from './schedulehome';

const Main: React.FC<{}> = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Schedule"
        screenOptions={{headerShown: false}}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Schedule" component={ScheduleHome} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Chatroom" component={Chatroom} />
        <Tab.Screen name="Account" component={Account} />
        {/* <Tab.Screen name="Home" component={Discover} />
      <Tab.Screen name="Add Cart" component={Cart} />

      <Tab.Screen name="Collections" component={Collections} />
      {/* <Tab.Screen name="Account" component={Account} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;

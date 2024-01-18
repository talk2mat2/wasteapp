import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Schedule from '../screens/schedule';
import ScheduleForm1 from '../screens/scheduleform1';

const ScheduleHome = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="scheduleStart" component={Schedule} />
      <Stack.Screen name="scheduleForm1" component={ScheduleForm1} />
    </Stack.Navigator>
  );
};

export default ScheduleHome;

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>jjj</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor:colors.primary[100]
  },
});

export default Home;

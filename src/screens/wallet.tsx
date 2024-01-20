import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const Wallet: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Wallet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor:colors.primary[100]
  },
});

export default Wallet;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EmptyCart = ({prod}) => {
  return <Text style={styles.textCart}>Your Cart is Empty</Text>;
};

const styles = StyleSheet.create({
  textCart: {
    color: 'silver',
    fontSize: 30,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 150,
  },
});

export default EmptyCart;

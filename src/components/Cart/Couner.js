import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = ({cnt, setCnt}) => {
  const inc = () => {
    setCnt(cnt + 1);
  };

  const dec = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={dec}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{cnt}</Text>
      <TouchableOpacity onPress={inc}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    backgroundColor: '#0021A3',
    borderRadius: 5,
    width: 50,
    justifyContent: 'center',
    padding: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    paddingLeft: 3,
    paddingRight: 3,
  },
});

export default Counter;

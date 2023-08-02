import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const Congrats = ({prod}) => {
  return (
    <View style={styles.cont}>
      <Image style={styles.image} source={require('../images/congrat.png')} />
      <Text style={styles.title}>Вітаємо!</Text>
      <Text style={styles.titleText}>
        Ваше замовлення успішно розміщено. Ми зв'яжемося з вами найближчим часом
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  title: {
    color: '#3646C4',
    fontSize: 40,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 30,
  },
  titleText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '700',
    marginTop: 30,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: 537 / 3,
    height: 506 / 3,
    alignSelf: 'center',
    marginTop: 150,
  },
});

export default Congrats;

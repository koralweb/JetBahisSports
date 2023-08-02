import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';

const ContactsScreen = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />
      <Text style={styles.title}>Контакти</Text>
      <View style={styles.cont}>
        <Text style={styles.item}>admin@jetbahissports.site</Text>
        <Text style={styles.item}>
          вулиця Рогнідинська, 2, Київ, Украина, 02000
        </Text>
        <Text style={styles.item}>+380 44 237 9054</Text>
      </View>
      <View style={styles.wrp}>
        <TouchableOpacity
          style={styles.butten}
          onPress={() => navigation.push('Home')}>
          <Text style={styles.btn}>На головну</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    margin: 15,
  },
  cont: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  item: {
    backgroundColor: 'silver',
    marginBottom: 25,
    padding: 15,
    borderRadius: 5,
  },
  wrp: {
    height: '40%',
    marginTop: 40,
  },
  butten: {
    width: '70%',
    marginTop: 'auto',
    backgroundColor: '#0021A3',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  btn: {
    fontSize: 18,
    color: 'white',
    padding: 15,
  },
});

export default ContactsScreen;

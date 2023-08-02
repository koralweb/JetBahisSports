import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import Congrats from '../components/Congrats';
import products from '../mobx/products';

const BookingScreen = ({navigation, route}) => {
  const [showCongrats, setShowCongrats] = useState(false);
  return (
    <>
      <Header navigation={navigation} />
      {route.params ? (
        <Text style={styles.title}>Оформити замовлення</Text>
      ) : (
        <Text style={styles.title}>Замовити столик</Text>
      )}
      <View style={styles.cont}>
        <Text style={styles.list}>Кількість осіб</Text>
        <TextInput style={styles.inner} placeholder="Кількість осіб" />
        {!route.params && (
          <>
            <Text style={styles.list}>Номер столика</Text>
            <TextInput style={styles.inner} placeholder="Номер столика" />
          </>
        )}
        <Text style={styles.list}>Номер телефона</Text>
        <TextInput style={styles.inner} placeholder="Номер телефона" />
        <Text style={styles.list}>Ім'я</Text>
        <TextInput style={styles.inner} placeholder="Ім'я" />
      </View>
      <View style={styles.wrp}>
        <TouchableOpacity
          style={styles.butten}
          onPress={() => {
            products.clearCart();
            setShowCongrats(true);
          }}>
          <Text style={styles.btn}>Замовити</Text>
        </TouchableOpacity>
      </View>
      {showCongrats && <Congrats navigation={navigation} />}
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
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'silver',
    alignSelf: 'center',
  },
  list: {
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 5,
    marginTop: 5,
  },
  inner: {
    backgroundColor: '#FFEEDA',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 5,
    height: 39,
    paddingLeft: 20,
  },
  wrp: {
    backgroundColor: '#FFEEDA',
    height: '40%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 40,
  },
  butten: {
    width: '70%',
    marginTop: 150,
    backgroundColor: '#0021A3',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  btn: {
    fontSize: 18,
    color: 'white',
    padding: 15,
  },
});

export default BookingScreen;

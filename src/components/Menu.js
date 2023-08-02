import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';

const Menu = ({navigation, setMenu}) => {
  const [screenName, setScreenName] = useState(useRoute().name);
  return (
    <ImageBackground style={styles.cont} source={require('../images/Bg.png')}>
      {screenName !== 'Home' && (
        <TouchableOpacity onPress={() => setMenu(false)}>
          <FontAwesomeIcon
            style={styles.wrp}
            color={'white'}
            size={30}
            icon={'close'}
          />
        </TouchableOpacity>
      )}

      <Image style={styles.image} source={require('../images/logo3.png')} />

      <View style={styles.list}>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
          <Text style={styles.item}>Головна</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Shop')}>
          <Text style={styles.item}>Магазин</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.push('Booking')}>
          <Text style={styles.item}>Бронювання</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Broadcasts')}>
          <Text style={styles.item}>Трансляції</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Contacts')}>
          <Text style={styles.item}>Контакти</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Cart')}>
          <Text style={styles.item}>Кошик</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: 40,
  },
  wrp: {
    margin: 10,
  },

  image: {
    width: 1149 / 3,
    height: 375 / 3,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  list: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    padding: 30,
    borderWidth: 1,
    borderColor: 'silver',
  },
  item: {
    backgroundColor: '#0021A3',
    padding: 10,
    marginBottom: 15,
    width: '90%',
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    borderRadius: 10,
  },
});

export default Menu;

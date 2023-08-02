import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import products from '../mobx/products';
import Product from '../components/Product';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ShopScreen = ({navigation}) => {
  const renderProducts = () => {
    return products.list.map(prod => {
      return <Product key={prod.title} prod={prod} />;
    });
  };
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.cont}>
          <Text style={styles.title}>Знайдіть свою улюблену їжу</Text>
          <TouchableOpacity
            onPress={() => navigation.push('Cart')}
            style={styles.pantry}>
            <FontAwesomeIcon
              icon={'shopping-basket'}
              color={'#fff'}
              size={27}
            />
          </TouchableOpacity>
        </View>

        {renderProducts()}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  search: {
    width: '80%',
    backgroundColor: 'silver',
    borderRadius: 25,
    paddingLeft: 15,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    margin: 15,
  },
  pantry: {
    width: 60,
    height: 60,
    backgroundColor: '#0021A3',
    marginRight: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ShopScreen;

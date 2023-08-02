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
import {observer} from 'mobx-react-lite';
import EmptyCart from '../components/EmptyCart';

const CartScreen = ({navigation}) => {
  const renderProducts = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => {
        return <Product key={prod.title} prod={prod} />;
      });
  };
  const total = () => {
    const addArr = products.list.filter(el => el.added);
    let total = 0;
    addArr.forEach(product => {
      total = product.count * product.price + total;
    });
    return total;
  };

  return (
    <>
      <Header navigation={navigation} />
      {products.list.some(el => el.added) ? (
        <View style={{flex: 1}}>
          <Text style={styles.title}>Кошик</Text>
          <ScrollView>{renderProducts()}</ScrollView>
          <View style={{marginTop: 'auto'}}>
            <View style={styles.wrp}>
              <View style={styles.totalPrice}>
                <Text style={styles.sum}>Сума замовлення</Text>
                <Text style={styles.sum}>{total()} грн</Text>
              </View>

              <TouchableOpacity
                style={styles.butten}
                onPress={() => navigation.push('Booking', {cart: true})}>
                <Text style={styles.btn}>Оформить заказ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <EmptyCart />
      )}
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
  wrp: {
    backgroundColor: '#FFEEDA',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 40,
  },
  butten: {
    width: '70%',
    marginTop: 25,
    backgroundColor: '#0021A3',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  btn: {
    fontSize: 18,
    color: 'white',
    padding: 15,
  },
  sum: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 25,
  },
});

export default observer(CartScreen);

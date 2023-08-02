import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import products from '../mobx/products';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {observer} from 'mobx-react-lite';
import Counter from './Cart/Couner';

const Product = ({prod}) => {
  const [cnt, setCnt] = useState(prod.count);
  return (
    <View key={prod.title}>
      <View style={styles.cont}>
        <Image style={styles.image} source={prod.image} />

        <View style={styles.list}>
          <Text style={styles.price}>{prod.price} грн</Text>
          <Text style={styles.title}>{prod.title}</Text>
          <View style={styles.inner}>
            <Counter cnt={cnt} setCnt={setCnt} />
            {prod.added ? (
              <TouchableOpacity
                style={styles.butten}
                onPress={() => products.removeProduct(prod.id)}>
                <FontAwesomeIcon
                  color={'white'}
                  size={30}
                  icon={'check-square'}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.butten}
                onPress={() => products.addProduct(prod.id, cnt)}>
                <Text style={styles.btn}>Add +</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'silver',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  image: {
    width: 180,
    height: 150,
  },
  list: {
    marginLeft: 15,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: 'red',
    marginTop: 5,
  },
  title: {
    width: '90%',
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    marginBottom: 30,
  },
  butten: {
    marginLeft: 30,
    backgroundColor: '#0021A3',
    padding: 5,
    borderRadius: 5,
  },
  btn: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default observer(Product);

import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import translationsList from '../data/translationList';

const BroadcastsScreen = ({navigation}) => {
  const renderItems = () => {
    return translationsList
      .filter(el => el.date >= new Date().getDate())
      .map(item => (
        <View key={Math.random()}>
          <View style={styles.list}>
            <Text style={styles.liga}>{item.liga}</Text>
            <View>
              <Text style={styles.comand_1}>{item.team1}</Text>
              <Text style={styles.comand_2}>{item.team2}</Text>
            </View>
            <Text style={styles.time}>0{item.date}.08.23</Text>
          </View>
        </View>
      ));
  };
  return (
    <View>
      <Header navigation={navigation} />
      <Text style={styles.title}>Спортивні трансляції</Text>
      <ScrollView>
        <View key={Math.random()} style={styles.cont}>
          {renderItems()}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    margin: 15,
  },

  search: {
    backgroundColor: 'silver',
    borderRadius: 25,
    paddingLeft: 15,
  },
  list: {
    width: '95%',
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'silver',
    padding: 5,
    marginBottom: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  liga: {
    width: 90,
    fontSize: 17,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#0021A3',
    alignSelf: 'center',
    textAlign: 'center',
  },
  comand_1: {
    width: 160,
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
  },
  comand_2: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
  },
  time: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    alignSelf: 'center',
  },
});

export default BroadcastsScreen;

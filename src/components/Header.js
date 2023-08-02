import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Menu from './Menu';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';

const Header = ({navigation}) => {
  const [menu, setMenu] = useState(useRoute().name === 'Home');
  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={() => setMenu(true)}>
        <FontAwesomeIcon color={'black'} size={30} icon={'bars'} />
      </TouchableOpacity>

      {menu && <Menu navigation={navigation} setMenu={setMenu} />}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'relative',
    zIndex: 2,
    paddingTop: 40,
    paddingLeft: 10,
  },
});

export default Header;

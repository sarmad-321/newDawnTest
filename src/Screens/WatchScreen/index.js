import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import WatchHeader from '../../Components/WatchHeader';
import styles from './styles';
import Poppins from '../../Components/TextWrapper/Poppins';

const WatchScreen = ({navigation}) => {
  const data = [
    {title: 'Free Guy'},
    {title: `The King's Man`},
    {title: 'Jojo Rabbit'},
    {title: `The King's Man`},
    {title: 'Jojo Rabbit'},
    {title: 'Free Guy'},
    {title: `The King's Man`},
    {title: 'Jojo Rabbit'},
    {title: `The King's Man`},
    {title: 'Jojo Rabbit'},
    {title: 'Free Guy'},
    {title: `The King's Man`},
    {title: 'Jojo Rabbit'},
    {title: `The King's Man`},
    {title: 'Jojo Rabbit'},
  ];
  const HandlePress = () => {
    navigation.navigate('WatchDetails');
  };
  return (
    <View>
      <WatchHeader />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.promptContainer}>
          {data.map(item => {
            return (
              <TouchableOpacity
                onPress={() => HandlePress()}
                activeOpacity={0.7}
                style={styles.list}>
                <Poppins style={styles.h2}>{item.title}</Poppins>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.spacing}></View>
      </ScrollView>
    </View>
  );
};

export default WatchScreen;

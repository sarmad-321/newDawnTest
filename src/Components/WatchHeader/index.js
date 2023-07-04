import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import Poppins from '../TextWrapper/Poppins';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons} from '../../assets';

const WatchHeader = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.row}></SafeAreaView>
    </View>
  );
};

export default WatchHeader;

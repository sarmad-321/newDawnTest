import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../../Utils/units';

export default styles = StyleSheet.create({
  container: {
    height: vh * 15,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  h1: {
    fontSize: vh * 2.5,
    color: '#202C43',
  },
  imgContainer: {
    height: vh * 3.5,
    width: vh * 3.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: vw * 5,
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

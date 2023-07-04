import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../../Utils/units';

export default styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingTop: vh * 2.5,
    width: '100%',
    backgroundColor: '#F6F6FA',
    paddingHorizontal: vw * 2.5,
  },
  promptContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  h1: {
    color: 'white',
    fontSize: vh * 2.5,
  },
  h2: {
    color: 'white',
    paddingLeft: '5%',
    paddingBottom: '10%',
  },
  list: {
    height: vh * 15,
    width: vw * 45,
    // marginRight: vw * 2.5,
    justifyContent: 'flex-end',
    // paddingHorizontal: '5%',
    // paddingBottom: '5%',
    borderRadius: vh * 1,
    backgroundColor: 'black',
    marginBottom: vh * 2.5,
  },
  spacing: {
    marginBottom: vh * 25,
    backgroundColor: 'red',
  },
});

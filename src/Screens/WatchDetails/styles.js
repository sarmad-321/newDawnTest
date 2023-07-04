import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../../Utils/units';

export default styles = StyleSheet.create({
  h1: {
    color: 'white',
  },
  h2: {
    color: 'white',
    fontSize: vh * 1.6,
  },
  blackh2: {
    color: '#8F8F8F',
    fontSize: vh * 1.6,
  },
  line: {
    height: vh * 0.1,
    width: '100%',
    marginVertical: vh * 3,
    backgroundColor: 'lightgrey',
  },
  blackh1: {
    color: 'black',
    fontSize: vh * 2.4,
  },
  bubble: {
    paddingHorizontal: vh * 2.2,
    height: vh * 3.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 10,
  },
  bubbleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  img: {
    resizeMode: 'contain',
    width: '10%',
    height: '20%',
  },
  buttonContainer: {
    backgroundColor: '#61C3F2',
    marginBottom: vh * 2,
    height: vh * 7,
    width: vw * 60,
    borderRadius: vh * 1,
    alignItems: 'center',
    borderWidth: vh * 0.1,
    borderColor: '#61C3F2',
    justifyContent: 'center',
  },
});

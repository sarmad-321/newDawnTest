import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {vh} from '../../Utils/units';

export default function TextHOC(props) {
  return (
    <Text
      {...props}
      style={[styles.text, props?.style]}
      ellipsizeMode="tail"
      adjustsFontSizeToFit={false}
      allowFontScaling={false}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: vh * 2,
    color: 'black',
  },
});

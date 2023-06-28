import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {TabBg} from './TabBg';
import LinearGradient from 'react-native-linear-gradient';
import {icons} from '../Assets';
import {vh} from '../Utils/units';
import {Circle} from 'react-native-svg';

type Props = BottomTabBarButtonProps & {
  bgColor?: string;
};

export const TabBarAdvancedButton: React.FC<Props> = ({bgColor, ...props}) => (
  <View style={styles.container} pointerEvents="box-none">
    <TabBg color={bgColor} style={styles.background} />

    <LinearGradient colors={['#97A3E2', '#3E59E8']} style={styles.button}>
      <Image
        source={icons.plus}
        style={{resizeMode: 'contain', height: '40%', width: '40%'}}
      />
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: vh * 6,
    height: vh * 6,
    borderRadius: 27,
    // backgroundColor: 'blue',
  },
  buttonIcon: {
    fontSize: 16,
    color: '#F6F7EB',
  },
});

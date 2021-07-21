import React, {useContext} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import profileCtx, {Profile} from '../../store/profile';
import useColorScheme from '../../hooks/useColorScheme';
import {icons, COLORS, FONTS} from '../../constants';
import {Text, View} from '../Themed';
import styles from './styles';

interface IOrderProps {
  onProceed: () => void;
  count?: number;
  sum?: number;
}

export default ({onProceed, count = 0, sum = 0}: IOrderProps) => {
  const colorScheme = useColorScheme();
  const {location, cardPreview} = useContext<Profile>(profileCtx);
  const {tint, tabIconDefault, background} = COLORS[colorScheme];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={FONTS.h3}>{count} items in Cart</Text>
        <Text style={FONTS.h3}>{sum.toFixed(2)}$</Text>
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.innerSubContainer}>
          <Image
            style={[styles.icon, {tintColor: tabIconDefault}]}
            resizeMode="contain"
            source={icons.pin}
          />
          <Text style={styles.text} numberOfLines={1}>
            {location.streetName}
          </Text>
        </View>
        <View style={styles.innerSubContainer}>
          <Image
            style={[styles.icon, {tintColor: tabIconDefault}]}
            source={icons.master_card}
            resizeMode="contain"
          />
          <Text style={styles.text}>****{cardPreview}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: tint}]}
          onPress={onProceed}>
          <Text style={[FONTS.h2, {color: background}]}>Order</Text>
        </TouchableOpacity>
      </View>

      {isIphoneX() && <View style={styles.iphoneBar} />}
    </View>
  );
};

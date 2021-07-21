import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image, TouchableOpacity} from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import {COLORS, FONTS, icons} from '../../constants';
import {Courier, Screen} from '../../types';
import {Text, View} from '../Themed';
import styles from './styles';

interface ICourierInfoProps {
  data: Courier;
  rating: number;
}

export default ({data, rating}: ICourierInfoProps) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const {tint, tabIconDefault, disabled} = COLORS[colorScheme];

  return (
    <View style={styles.container}>
      {/* Profile */}
      <View style={styles.innerContainer}>
        <Image source={data.avatar} style={styles.avatar} />

        <View style={styles.innerSubContainer}>
          <Text style={FONTS.h4}>{data.name}</Text>
          <Text style={[FONTS.body4, {color: tabIconDefault}]}>
            {data.name}
          </Text>
        </View>

        <Image source={icons.star} style={[styles.icon, {tintColor: tint}]} />
        <Text style={FONTS.body3}>{rating}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: tint}]}
          onPress={() => navigation.navigate(Screen.Home)}>
          <Text style={FONTS.h4}>Call</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: disabled}]}
          onPress={navigation.goBack}>
          <Text style={FONTS.h4}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

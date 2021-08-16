import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useColorScheme from '../../hooks/useColorScheme';
import {Restaurant, Screen} from '../../typings';
import {COLORS, FONTS, icons} from '../../constants';
import {Text, View} from '../Themed';
import styles from './styles';

interface IRestaurantItemProps {
  data: Restaurant;
}

export default ({data}: IRestaurantItemProps) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const {tint, background, tabIconDefault, text} = COLORS[colorScheme];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(Screen.Restaurant, {data})}>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={data.image} resizeMode="cover" style={styles.image} />

        <View
          style={[styles.imageInnerContainer, {backgroundColor: background}]}>
          <Text style={FONTS.h4}>{data.duration}</Text>
        </View>
      </View>

      {/* Restaurant Info */}
      <Text style={FONTS.body2}>{data.name}</Text>

      <View style={styles.bottomContainer}>
        {/* Rating */}
        <Image source={icons.star} style={[styles.rating, {tintColor: tint}]} />
        <Text style={FONTS.body3}>{data.rating}</Text>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          {data.categories.map(id => (
            <View style={styles.categoriesInnerContainer} key={id}>
              <Text style={FONTS.body3}>{id}</Text>
              <Text style={[FONTS.h3, {color: tabIconDefault}]}> . </Text>
            </View>
          ))}

          {/* Price */}
          {[1, 2, 3].map(val => (
            <Text
              key={val}
              style={[
                FONTS.body3,
                {color: val <= data.priceRating ? text : tint},
              ]}>
              $
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

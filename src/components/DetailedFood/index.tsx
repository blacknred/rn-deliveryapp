import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import {COLORS, FONTS, icons} from '../../constants';
import {Text, View} from '../Themed';
import {Food} from '../../typings';
import styles from './styles';

interface IDetailedFoodProps {
  onAddItem: () => void;
  onDeleteItem: () => void;
  count?: number;
  data: Food;
}

export default ({
  data,
  count = 0,
  onAddItem,
  onDeleteItem,
}: IDetailedFoodProps) => {
  const colorScheme = useColorScheme();
  const {tabIconDefault} = COLORS[colorScheme];

  return (
    <View style={styles.container}>
      {/* image & quantity */}
      <View style={styles.imageContainer}>
        <Image source={data.image} resizeMode="cover" style={styles.image} />

        <View style={styles.floatContainer}>
          <TouchableOpacity
            style={styles.innerFloatContainer}
            onPress={onDeleteItem}>
            <Text style={FONTS.body1}>-</Text>
          </TouchableOpacity>

          <View style={styles.innerFloatContainer}>
            <Text style={FONTS.h2}>{count}</Text>
          </View>

          <TouchableOpacity
            style={styles.innerFloatContainer}
            onPress={onAddItem}>
            <Text style={FONTS.body1}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* name */}
      <View style={styles.innerContainer}>
        <Text style={[FONTS.h2, styles.center]}>
          {data.name} - ${data.price.toFixed(2)}
        </Text>
      </View>

      {/* description */}
      <View style={styles.innerContainer}>
        <Text style={[FONTS.body3, styles.center]}>{data.description}</Text>
      </View>

      {/* calories */}
      <View style={styles.innerContainer}>
        <Image source={icons.fire} style={styles.icon} />
        <Text style={[FONTS.body3, {color: tabIconDefault}]}>
          {data.calories.toFixed(2)} cal
        </Text>
      </View>
    </View>
  );
};

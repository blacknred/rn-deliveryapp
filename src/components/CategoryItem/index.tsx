import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import {COLORS} from '../../constants';
import {Category} from '../../types';
import {Text, View} from '../Themed';
import styles from './styles';

interface ICategoryItemProps {
  isSelected: boolean;
  onSelect: () => void;
  data: Category;
}

export default ({data, isSelected, onSelect}: ICategoryItemProps) => {
  const colorScheme = useColorScheme();
  const {tint, background, disabled, text} = COLORS[colorScheme];

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: isSelected ? tint : background},
      ]}
      onPress={onSelect}>
      <View style={[styles.innerContainer, {backgroundColor: disabled}]}>
        <Image source={data.image} resizeMode="contain" style={styles.image} />
      </View>

      <Text style={[styles.title, {color: isSelected ? background : text}]}>
        {data.name}
      </Text>
    </TouchableOpacity>
  );
};

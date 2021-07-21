import React from 'react';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import {COLORS, FONTS} from '../../constants';
import {Text, View} from '../Themed';
import styles from './styles';

interface IHeaderProps {
  title: string;
  leftIcon: ImageSourcePropType;
  rightIcon: ImageSourcePropType;
  leftAction?: () => void;
  rightAction?: () => void;
}

export default ({
  title,
  leftIcon,
  rightIcon,
  leftAction,
  rightAction,
}: IHeaderProps) => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={leftAction}>
        <Image source={leftIcon} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>

      <View
        style={[
          styles.innerContainer,
          {
            backgroundColor: COLORS[colorScheme].disabled,
          },
        ]}>
        <Text style={FONTS.h3} numberOfLines={1}>
          {title}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={rightAction}>
        <Image source={rightIcon} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

import * as React from 'react';
import {
  Text as DefaultText,
  View as DefaultView,
  SafeAreaView as DefaultSafeAreaView,
} from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import {COLORS} from '../constants';

export function useThemeColor(
  props: {light?: string; dark?: string},
  colorName: keyof typeof COLORS.light & keyof typeof COLORS.dark,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return COLORS[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

  return <DefaultText style={[{color}, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );

  return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}

export function SafeAreaView(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );

  return (
    <DefaultSafeAreaView style={[{backgroundColor}, style]} {...otherProps} />
  );
}
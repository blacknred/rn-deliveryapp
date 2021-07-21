import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, TextProps} from './Themed';

export default function CenteredText(props: TextProps) {
  return (
    <View style={styles.container}>
      <Text {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

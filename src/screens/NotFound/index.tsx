import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, SafeAreaView} from '../../components/Themed';
import {RootStackParamList, Screen} from '../../typings';
import {FONTS} from '../../constants';
import styles from './styles';

export default ({
  navigation,
}: StackScreenProps<RootStackParamList, Screen.NotFound>) => (
  <SafeAreaView style={styles.container}>
    <Text style={FONTS.h1}>This screen doesn't exist.</Text>
    <TouchableOpacity onPress={() => navigation.replace(Screen.Home)}>
      <Text style={FONTS.h3}>Go to home screen!</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

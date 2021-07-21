import React from 'react';
import {Button, DevSettings} from 'react-native';
import {SafeAreaView} from '../../components/Themed';
import styles from './styles';

export default () => (
  <SafeAreaView style={styles.container}>
    <Button onPress={() => DevSettings.reload()} title={'Log out'} />
  </SafeAreaView>
);

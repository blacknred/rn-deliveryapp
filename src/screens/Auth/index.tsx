import {Button} from 'react-native';
import React, {useState, ReactElement} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

interface IAuthScreenProps {
  children: ReactElement;
}

export default ({children}: IAuthScreenProps) => {
  const [isLogged, setLogged] = useState<boolean>(false);

  return isLogged ? (
    children
  ) : (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => setLogged(true)} title={'Log in'} />
    </SafeAreaView>
  );
};

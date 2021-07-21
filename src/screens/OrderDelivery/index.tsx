import React, {useContext} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import profileCtx, {Profile} from '../../store/profile';
import {Screen, RootStackParamList} from '../../types';
import CourierInfo from '../../components/CourierInfo';
import {SafeAreaView} from '../../components/Themed';
import Map from '../../components/DeliveryMap';
import styles from './styles';

export default ({
  route,
}: StackScreenProps<RootStackParamList, Screen.OrderDelivery>) => {
  const {location} = useContext<Profile>(profileCtx);
  const {data} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Map from={location} to={data.location} />

      <CourierInfo data={data.courier} rating={data.rating} />
    </SafeAreaView>
  );
};

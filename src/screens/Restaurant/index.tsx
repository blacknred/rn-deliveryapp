import {Animated} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {View, SafeAreaView} from '../../components/Themed';
import {StackScreenProps} from '@react-navigation/stack';
import {Screen, RootStackParamList} from '../../typings';
import DetailedFood from '../../components/DetailedFood';
import useColorScheme from '../../hooks/useColorScheme';
import {COLORS, icons, SIZES} from '../../constants';
import Header from '../../components/Header';
import Order from '../../components/Order';
import styles from './styles';

interface IDotsProps {
  count: number;
  position: Animated.AnimatedDivision;
}

const Dots = ({count, position}: IDotsProps) => {
  const colorScheme = useColorScheme();
  const {tint, tabIconDefault, text} = COLORS[colorScheme];

  return (
    <View style={styles.menuDotContainer}>
      {Array.from(Array(count).keys()).map((idx: number) => {
        const interpolate: (
          idx: number,
          a: any[],
        ) => Animated.AnimatedInterpolation = (idx, outputRange) => {
          return position.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            extrapolate: 'clamp',
            outputRange,
          });
        };

        return (
          <Animated.View
            key={`dot-${idx}`}
            opacity={interpolate(idx, [0.3, 1, 0.3])}
            style={[
              styles.menuDot,
              {
                width: interpolate(idx, [
                  SIZES.base * 0.8,
                  10,
                  SIZES.base * 0.8,
                ]),
                height: interpolate(idx, [
                  SIZES.base * 0.8,
                  10,
                  SIZES.base * 0.8,
                ]),
                backgroundColor: interpolate(idx, [tabIconDefault, tint, text]),
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const createDot = () => {
  const scrollX = new Animated.Value(0);
  return {
    divide: Animated.divide(scrollX, SIZES.width),
    event: Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
      useNativeDriver: false,
    }),
  };
};

export default ({
  route,
  navigation,
}: StackScreenProps<RootStackParamList, Screen.Restaurant>) => {
  const [orders, setOrders] = useState<any>({});
  const dot = useRef<any>(createDot());
  const {data} = route.params;

  const editOrder = useCallback(
    (id, price, isAdding) => () => {
      setOrders((all: any) => {
        if (!all[id]) {
          all[id] = {count: 0, sum: 0};
        }
        if (!all.total) {
          all.total = {count: 0, sum: 0};
        }
        all.total.count -= all[id].count;
        all.total.sum -= all[id].sum;
        all[id].count = Math.max(0, all[id].count + (isAdding ? 1 : -1));
        all[id].sum = Math.max(
          0,
          all[id].sum + (isAdding ? ++price : -++price),
        );
        all.total.count += all[id].count;
        all.total.sum += all[id].sum;

        return {...all};
      });
    },
    [setOrders],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={data.name}
        leftIcon={icons.back}
        rightIcon={icons.list}
        leftAction={navigation.goBack}
      />

      {/* menu */}
      {/* preview */}
      <Animated.ScrollView
        horizontal
        pagingEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        onScroll={dot.current.event}
        showsHorizontalScrollIndicator={false}>
        {data.menu.map(item => (
          <DetailedFood
            onAddItem={editOrder(item.menuId, item.price, true)}
            onDeleteItem={editOrder(item.menuId, item.price, false)}
            count={orders[item.menuId]?.count}
            key={`food-${item.menuId}`}
            data={item}
          />
        ))}
      </Animated.ScrollView>

      {/* dots */}
      <Dots count={data.menu.length} position={dot.current.divide} />

      {/* order */}
      <Order
        onProceed={() => navigation.navigate(Screen.OrderDelivery, {data})}
        {...orders.total}
      />
    </SafeAreaView>
  );
};

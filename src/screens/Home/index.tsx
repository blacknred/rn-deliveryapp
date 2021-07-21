import {FlatList} from 'react-native';
import React, {useState, useContext} from 'react';
import {SafeAreaView, View} from '../../components/Themed';
import RestaurantItem from '../../components/RestaurantItem';
import profileCtx, {Profile} from '../../store/profile';
import CategoryItem from '../../components/CategoryItem';
import CenteredText from '../../components/CenteredText';
import {Category, Restaurant} from '../../types';
import {icons, SIZES} from '../../constants';
import Header from '../../components/Header';
import useFetch from '../../hooks/useFetch';
import styles from './styles';

interface IFeedProps {
  opts: any;
}

const Feed = ({opts}: IFeedProps) => {
  const {response, error} = useFetch<Restaurant[]>('getRestaurants', opts);

  if (error) {
    return <CenteredText>Error</CenteredText>;
  }
  if (!response) {
    return <CenteredText>Loading...</CenteredText>;
  }
  if (!response.length) {
    return <CenteredText>No available restaurants</CenteredText>;
  }

  return (
    <FlatList
      renderItem={({item}) => <RestaurantItem data={item} />}
      keyExtractor={item => `restaurant-${item.id}`}
      contentContainerStyle={styles.verticalList}
      showsVerticalScrollIndicator={false}
      snapToInterval={SIZES.height - 480}
      snapToAlignment={'center'}
      decelerationRate={'fast'}
      data={response}
    />
  );
};

export default () => {
  const {location} = useContext<Profile>(profileCtx);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const {response, error} = useFetch<Category[]>('getCategories');

  const renderCategories = () => {
    if (error) {
      return <CenteredText>Error</CenteredText>;
    }
    if (!response) {
      return <CenteredText>Loading...</CenteredText>;
    }
    if (!response.length) {
      return <CenteredText>No categories</CenteredText>;
    }
    return (
      <View style={styles.horizontalList}>
        <FlatList
          keyExtractor={item => `category-${item.id}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <CategoryItem
              onSelect={() => setSelectedCategory(item.id)}
              isSelected={selectedCategory === item.id}
              data={item}
            />
          )}
          data={[{id: null, name: 'Top', image: icons.fire}, ...response]}
          horizontal
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={location.streetName}
        leftIcon={icons.nearby}
        rightIcon={icons.basket}
      />
      {renderCategories()}
      {response && <Feed opts={{categoryId: selectedCategory}} />}
    </SafeAreaView>
  );
};

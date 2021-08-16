import {ImageSourcePropType} from 'react-native';

export enum Screen {
  Home = 'Home',
  Search = 'Search',
  Saved = 'Saved',
  Profile = 'Profile',
  Restaurant = 'Restaurant',
  OrderDelivery = 'OrderDelivery',
  NotFound = 'NotFound',
}

export type RootStackParamList = {
  [Screen.Home]: undefined;
  [Screen.Restaurant]: {data: Restaurant};
  [Screen.OrderDelivery]: {data: Restaurant};
  [Screen.NotFound]: undefined;
};

export type HomeTabParamList = {
  [Screen.Home]: undefined;
  [Screen.Search]: undefined;
  [Screen.Saved]: undefined;
  [Screen.Profile]: undefined;
};

//

export type Coordinates = {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
};

export type Courier = {
  name: string;
  avatar: ImageSourcePropType;
};

export type Category = {
  id: number | null;
  name: string;
  image: ImageSourcePropType;
};

export type Food = {
  menuId: number;
  name: string;
  image: ImageSourcePropType;
  description: string;
  calories: number;
  price: number;
};

export type Restaurant = {
  id: number;
  name: string;
  rating: number;
  categories: Pick<Category, 'id'>[];
  priceRating: number;
  image: ImageSourcePropType;
  duration: string;
  location: Coordinates;
  courier: Courier;
  menu: Food[];
};

//

export type Location = {
  streetName: string;
  region: Coordinates;
};

export type Profile = {
  cardPreview: number;
  location: Location;
};

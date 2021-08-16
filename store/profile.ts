import {createContext} from 'react';
import {Profile} from '../src/typings';

const initialState = {
  cardPreview: 8888,
  location: {
    streetName: 'Voronezh',
    region: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  },
};

const ProfileContext = createContext<Profile>(initialState);

export default ProfileContext;

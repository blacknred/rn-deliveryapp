// import * as Linking from 'expo-linking';

// Home
// 	Home
// 	Search
// 	Saved
// 	Profile
// Restaurant
// OrderDelivery
// NotFound

export default {
  // prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

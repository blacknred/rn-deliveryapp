import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import AuthScreen from './screens/Auth';
import Navigation from './navigation';

export default function App() {
  // const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  /*!isLoadingComplete ? null :*/
  return (
    <SafeAreaProvider>
      <AuthScreen>
        <Navigation colorScheme={colorScheme} />
      </AuthScreen>
    </SafeAreaProvider>
  );
}

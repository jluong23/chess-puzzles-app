import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import Home from './screens/Home';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();


export default function App() {
  const [appLoaded, setappLoaded] = useState(false);
    async function prepare() {
      try {
        // Pre-load fonts
        await Font.loadAsync({
          'mukta-regular': require('./assets/fonts/Mukta-Regular.ttf'),
          'mukta-bold': require('./assets/fonts/Mukta-Bold.ttf'),
        })
        // Tell the application to render
        setappLoaded(true);
        await SplashScreen.hideAsync();

      } catch (e) {
        console.warn(e);
      }
    }
  
    useEffect(() => {
      prepare();
    }, [])

  if(appLoaded) {
    return(
      <Home/>
    ) 
  }else{
    return null;
  }


}
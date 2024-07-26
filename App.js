import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const start_time = Date.now();
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    // Wait 5 seconds to remove the splash screen
    new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() => {
      console.log(
        `👌 Application loading is completed in ${Date.now() - start_time}ms`,
      );
      SplashScreen.hideAsync();
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

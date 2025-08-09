import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import { TailwindProvider } from 'nativewind';

// Screens
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapSearchScreen from './screens/MapSearchScreen';
import BikeDetailsScreen from './screens/BikeDetailsScreen';
import BookingScreen from './screens/BookingScreen';
import OwnerDashboardScreen from './screens/owner/OwnerDashboardScreen';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <TailwindProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer theme={DefaultTheme}>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Auth" component={AuthScreen} />
              <Stack.Screen name="MapSearch" component={MapSearchScreen} />
              <Stack.Screen name="BikeDetails" component={BikeDetailsScreen} />
              <Stack.Screen name="Booking" component={BookingScreen} />
              <Stack.Screen name="OwnerDashboard" component={OwnerDashboardScreen} />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </NavigationContainer>
        </QueryClientProvider>
      </TailwindProvider>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);

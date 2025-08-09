import MapView, { Marker } from 'react-native-maps';
import { View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

type BikePin = { id: string; title: string; latitude: number; longitude: number };

export default function MapSearchScreen() {
  const [region, setRegion] = useState({
    latitude: 9.8489,
    longitude: 126.0459,
    latitudeDelta: 0.15,
    longitudeDelta: 0.15,
  });
  const [pins] = useState<BikePin[]>([
    { id: '1', title: 'Scooter near Cloud 9', latitude: 9.789, longitude: 126.165 },
  ]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const loc = await Location.getCurrentPositionAsync({});
        setRegion((r) => ({ ...r, latitude: loc.coords.latitude, longitude: loc.coords.longitude }));
      }
    })();
  }, []);

  return (
    <View className="flex-1">
      <MapView style={{ flex: 1 }} region={region} onRegionChangeComplete={setRegion}>
        {pins.map((p) => (
          <Marker key={p.id} coordinate={{ latitude: p.latitude, longitude: p.longitude }} title={p.title} />
        ))}
      </MapView>
      <View className="absolute bottom-4 left-4 right-4">
        <View className="bg-white rounded-xl shadow p-4">
          <Text className="font-semibold">Filters</Text>
          <View className="flex-row gap-2 mt-2">
            <TouchableOpacity className="px-3 py-2 bg-gray-100 rounded">
              <Text>Scooter</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-3 py-2 bg-gray-100 rounded">
              <Text>Manual</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-3 py-2 bg-gray-100 rounded">
              <Text>Dirt Bike</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}



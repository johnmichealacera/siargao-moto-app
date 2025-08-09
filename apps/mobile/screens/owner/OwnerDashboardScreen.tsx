import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

type Bike = { id: string; title: string; dailyPrice: number; status: 'active' | 'inactive' };

export default function OwnerDashboardScreen() {
  const [bikes] = useState<Bike[]>([
    { id: '1', title: 'Honda Click', dailyPrice: 500, status: 'active' },
    { id: '2', title: 'Yamaha Aerox', dailyPrice: 700, status: 'inactive' },
  ]);
  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-3">Owner Dashboard</Text>
      <TouchableOpacity className="bg-primary rounded-lg p-3 mb-3">
        <Text className="text-white text-center">Add new bike</Text>
      </TouchableOpacity>
      <FlatList
        data={bikes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="border rounded-lg p-3 mb-3">
            <Text className="font-semibold">{item.title}</Text>
            <Text className="text-gray-600">₱{item.dailyPrice}/day • {item.status}</Text>
            <View className="flex-row gap-2 mt-2">
              <TouchableOpacity className="bg-gray-100 rounded px-3 py-2"><Text>Edit</Text></TouchableOpacity>
              <TouchableOpacity className="bg-gray-100 rounded px-3 py-2"><Text>Availability</Text></TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}



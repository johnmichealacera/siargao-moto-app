import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function BikeDetailsScreen() {
  return (
    <View className="flex-1 bg-white">
      <Image source={{ uri: 'https://images.unsplash.com/photo-1541443131876-44b0144902af?q=80&w=1200' }} style={{ width: '100%', height: 220 }} />
      <View className="p-4 gap-2">
        <Text className="text-2xl font-bold">Yamaha Mio Scooter</Text>
        <Text className="text-gray-600">Starting at ₱500/day</Text>
        <Text className="mt-2">Easy to ride, fuel efficient. Perfect for island hopping.</Text>
        <TouchableOpacity className="bg-primary rounded-lg p-4 mt-4">
          <Text className="text-white text-center">Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



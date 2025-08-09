import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-1 p-6 gap-4 bg-white">
      <Text className="text-2xl font-bold">SiargaoMoto</Text>
      <TouchableOpacity className="bg-primary rounded-lg p-4" onPress={() => navigation.navigate('MapSearch')}>
        <Text className="text-white text-center">Search bikes on map</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-gray-800 rounded-lg p-4" onPress={() => navigation.navigate('Auth')}>
        <Text className="text-white text-center">Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-accent rounded-lg p-4" onPress={() => navigation.navigate('OwnerDashboard')}>
        <Text className="text-white text-center">Owner Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}



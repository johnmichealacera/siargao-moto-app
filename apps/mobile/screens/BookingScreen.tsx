import { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';

export default function BookingScreen() {
  const [startDate, setStartDate] = useState('2025-08-10');
  const [endDate, setEndDate] = useState('2025-08-12');
  const [deposit, setDeposit] = useState('0');
  const [pickupDropoff, setPickupDropoff] = useState(false);

  return (
    <View className="flex-1 p-4 bg-white gap-3">
      <Text className="text-2xl font-bold">Booking</Text>
      <TextInput className="border rounded p-3" value={startDate} onChangeText={setStartDate} placeholder="Start date (YYYY-MM-DD)" />
      <TextInput className="border rounded p-3" value={endDate} onChangeText={setEndDate} placeholder="End date (YYYY-MM-DD)" />
      <TextInput className="border rounded p-3" value={deposit} onChangeText={setDeposit} placeholder="Security deposit (optional)" keyboardType="numeric" />
      <View className="flex-row items-center justify-between">
        <Text>Pickup/Drop-off requested?</Text>
        <Switch value={pickupDropoff} onValueChange={setPickupDropoff} />
      </View>
      <TouchableOpacity className="bg-primary rounded-lg p-4">
        <Text className="text-white text-center">Simulate payment & confirm</Text>
      </TouchableOpacity>
    </View>
  );
}



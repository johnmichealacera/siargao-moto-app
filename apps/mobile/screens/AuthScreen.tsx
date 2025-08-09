import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../src/lib/firebase';

export default function AuthScreen() {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    try {
      if (mode === 'login') {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <View className="flex-1 p-6 gap-3 bg-white">
      <Text className="text-2xl font-bold">{mode === 'login' ? 'Login' : 'Create account'}</Text>
      {error && <Text className="text-red-500">{error}</Text>}
      <TextInput className="border rounded p-3" placeholder="Email" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput className="border rounded p-3" placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity className="bg-primary rounded-lg p-4" onPress={handleSubmit}>
        <Text className="text-white text-center">Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setMode(mode === 'login' ? 'signup' : 'login')}>
        <Text className="text-center text-gray-700">{mode === 'login' ? 'Need an account? Sign up' : 'Have an account? Log in'}</Text>
      </TouchableOpacity>
    </View>
  );
}



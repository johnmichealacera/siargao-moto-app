import { initializeApp, getApps } from 'firebase/app';
import Constants from 'expo-constants';

const firebaseConfig = Constants.expoConfig?.extra?.firebase ?? {};

export const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];



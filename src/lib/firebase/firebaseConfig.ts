import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_apiKey,
  authDomain: process.env.EXPO_PUBLIC_FB_authDomain,
  projectId: process.env.EXPO_PUBLIC_FB_projectId,
  storageBucket: process.env.EXPO_PUBLIC_FB_storageBucket,
  messagingSenderId: process.env.EXPO_PUBLIC_FB_messagingSenderId,
  appId: process.env.EXPO_PUBLIC_FB_appId,
  measurementId: process.env.EXPO_PUBLIC_FB_measurementId,
};

const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);

export { firestore, firebase };

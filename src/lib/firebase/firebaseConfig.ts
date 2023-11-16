import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  EXPO_PUBLIC_FB_apiKey,
  EXPO_PUBLIC_FB_authDomain,
  EXPO_PUBLIC_FB_projectId,
  EXPO_PUBLIC_FB_storageBucket,
  EXPO_PUBLIC_FB_messagingSenderId,
  EXPO_PUBLIC_FB_appId,
  EXPO_PUBLIC_FB_measurementId,
} from "@env";

export const firebaseConfig = {
  apiKey: EXPO_PUBLIC_FB_apiKey,
  authDomain: EXPO_PUBLIC_FB_authDomain,
  projectId: EXPO_PUBLIC_FB_projectId,
  storageBucket: EXPO_PUBLIC_FB_storageBucket,
  messagingSenderId: EXPO_PUBLIC_FB_messagingSenderId,
  appId: EXPO_PUBLIC_FB_appId,
  measurementId: EXPO_PUBLIC_FB_measurementId,
};

const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);

export { firestore, firebase };

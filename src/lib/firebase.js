import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-application-c4f44.firebaseapp.com",
  projectId: "chat-application-c4f44",
  storageBucket: "chat-application-c4f44.appspot.com",
  messagingSenderId: "476774870161",
  appId: "1:476774870161:web:e4bcfbcbe96b5d293ba330"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export const storage = getStorage();
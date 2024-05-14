import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chatapp-7d790.firebaseapp.com",
  projectId: "react-chatapp-7d790",
  storageBucket: "react-chatapp-7d790.appspot.com",
  messagingSenderId: "985374206694",
  appId: "1:985374206694:web:23dd8bfce7e59f5886e927",
  measurementId: "G-6MGXD8EEMM"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export const storage = getStorage();
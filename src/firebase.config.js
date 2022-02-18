
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDRimRJiY1bsPp1aMHNUG9_CuaQJJTDJ_M",
  authDomain: "house-marketplace-projec-56b26.firebaseapp.com",
  projectId: "house-marketplace-projec-56b26",
  storageBucket: "house-marketplace-projec-56b26.appspot.com",
  messagingSenderId: "13567032110",
  appId: "1:13567032110:web:6be3eda9e5624757cb58bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
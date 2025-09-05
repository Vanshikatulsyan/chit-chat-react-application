
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-dab62.firebaseapp.com",
  projectId: "reactchat-dab62",
  storageBucket: "reactchat-dab62.appspot.com",
  messagingSenderId: "723889198303",
  appId: "1:723889198303:web:f57cca90162f89bc2c856a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

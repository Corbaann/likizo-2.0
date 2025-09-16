// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWfop5wgEoKU3V1bZ5dI5YArYYRfa7PNc",
  authDomain: "likizo-4399d.firebaseapp.com",
  projectId: "likizo-4399d",
  storageBucket: "likizo-4399d.firebasestorage.app",
  messagingSenderId: "404135018947",
  appId: "1:404135018947:web:cda5e625b379175e9ebd76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
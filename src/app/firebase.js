// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzr0p88NeBfvLXvA3j8rDuf4RikIo9kKg",
  authDomain: "portfolio-407314.firebaseapp.com",
  projectId: "portfolio-407314",
  storageBucket: "portfolio-407314.appspot.com",
  messagingSenderId: "563115885220",
  appId: "1:563115885220:web:a0a7f44b2a6d9e04801c31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
const storageRef = ref(storage, "images");

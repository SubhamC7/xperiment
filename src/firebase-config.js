import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { config } from "process";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyIwcCNd28mckw2RXPOHS1-KgIFf99pHE",
  authDomain: "wisdom-books-6e668.firebaseapp.com",
  projectId: "wisdom-books-6e668",
  storageBucket: "wisdom-books-6e668.appspot.com",
  messagingSenderId: "957859263673",
  appId: "1:957859263673:web:b5d7956021af2d2a045768",
  measurementId: "G-NQ49JZ8BJK",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
export const firestore = getFirestore(app);

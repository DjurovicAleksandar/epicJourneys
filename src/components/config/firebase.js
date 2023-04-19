import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtYuxh5IRhl57VTXgBmA-_RC_79Vn3YDs",
  authDomain: "epicjourneys-3f488.firebaseapp.com",
  projectId: "epicjourneys-3f488",
  storageBucket: "epicjourneys-3f488.appspot.com",
  messagingSenderId: "180645748531",
  appId: "1:180645748531:web:8f56b439f31f41a7dca846",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

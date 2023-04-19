import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth, db } from "./firebase.js";
import { doc, setDoc } from "firebase/firestore";

export const signUp = async function (email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    const userRef = doc(db, "users", email);

    setDoc(userRef, {
      wishlist: [],
    });
  } catch (err) {
    console.error(err);
  }
};

export const logIn = function (email, password) {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = function (firebaseAuth) {
  return signOut(firebaseAuth);
};

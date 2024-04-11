
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJouB3XRLd1xk8iLuyy8qzM42aWFc7ceI",
  authDomain: "devlinks-cc648.firebaseapp.com",
  projectId: "devlinks-cc648",
  storageBucket: "devlinks-cc648.appspot.com",
  messagingSenderId: "773711057089",
  appId: "1:773711057089:web:d361a0a80bbf6b8e8a4440"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}
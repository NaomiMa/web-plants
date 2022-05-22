import { initializeApp } from "firebase/app";
import {
  getFirestore,serverTimestamp
} from "firebase/firestore";
import { getStorage,  } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUSLVvPzq8TH-Jb0_pP-Ruma4p0Gptwv0",
  authDomain: "web-plants-7cecb.firebaseapp.com",
  projectId: "web-plants-7cecb",
  storageBucket: "web-plants-7cecb.appspot.com",
  messagingSenderId: "554917362667",
  appId: "1:554917362667:web:73a636d9d6819b618a37ae",
};

// Initialize Firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

//init firebase auth
const auth = getAuth();

//init firebase storage
const storage = getStorage();

// timestamp
// const timestamp = Timestamp();

export { db, auth, storage };


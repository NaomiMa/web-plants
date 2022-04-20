// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0ux6Hh_ERk39vklP7G85wu-pe9fiSZe8",
  authDomain: "myplant-43775.firebaseapp.com",
  databaseURL:
    "https://myplant-43775-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myplant-43775",
  storageBucket: "myplant-43775.appspot.com",
  messagingSenderId: "598578748115",
  appId: "1:598578748115:web:350c3249ee17c60a341226",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init services
const db = getFirestore();

export {db}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC0ux6Hh_ERk39vklP7G85wu-pe9fiSZe8",
//     authDomain: "myplant-43775.firebaseapp.com",
//     databaseURL: "https://myplant-43775-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "myplant-43775",
//   storageBucket: "myplant-43775.appspot.com",
//   messagingSenderId: "598578748115",
//   appId: "1:598578748115:web:350c3249ee17c60a341226"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default getFirestore();

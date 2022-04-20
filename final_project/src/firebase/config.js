import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
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

// collection ref
const colRef = collection(db, "plants");

export { db, auth };

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    // console.log(snapshot.docs)
    let plants = [];
    snapshot.docs.forEach((doc) => {
      plants.push({ ...doc.data(), id: doc.id });
    });
    console.log(plants);
  })
  .catch((err) => {
    console.log(err.message);
  });



//   // adding documents
//   const addPlantsForm = document.querySelector('.add')
// addPlantsForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     addDoc(colRef, {
//         name: addPlantsForm.name.value,
//         description: addPlantsForm.description.value,
//         treatment: addPlantsForm.treatment.value,
//         tips: addPlantsForm.tips.value,
//         tag: addPlantsForm.irrigtion.value,
//         tag: addPlantsForm.location.value,
//         tag: addPlantsForm.season.value,
//         tag: addPlantsForm.uses.value,
//         lighting: addPlantsForm.lighting.value,
//       })
//       .then(() => {
//         addPlantsForm.reset()
//       })
// })

// // deleting documents
// const deletePlantsForm = document.querySelector('.delete')
// deletePlantsForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const docRef = doc(db, 'Plants', deletePlantsForm.id.value)

//     deleteDoc(docRef)
//       .then(() => {
//         deletePlantsForm.reset()
//       }) 
// })

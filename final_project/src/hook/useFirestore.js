import { useReducer, useEffect, useState } from "react";
import { db } from "../firebase/config";
import {
  doc,
  addDoc,
  deleteDoc,
  collection,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "DELETED_DOCUMENT":
      return { isPending: false, document: null, success: true, error: null };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    case "UPDATED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    default:
      return state;
  }
};

export const useFirestore = (c) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const ref = collection(db, c);

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    console.log(action);
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add a document
  const addDocument = async (doc) => {
    // dispatch({ type: "IS_PENDING" });
    console.log("doc", doc);
    try {
      // const createdAt = Timestamp.fromDate(new Date());
      // const addedDocument = await addDoc(ref, { ...doc, createdAt })
      const addedDocument = await addDoc(collection(db, "posts"), {
        ...doc,
        // createdAt,
      });
      // console.log("addedDocument", addedDocument);
      // dispatchIfNotCancelled({
      //   type: "ADDED_DOCUMENT",
      //   payload: addedDocument,
      // });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });

    try {
      await deleteDoc(doc(ref, { id }));
      dispatchIfNotCancelled({ type: "DELETED_DOCUMENT" });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: "could not delete" });
    }
  };

  // update a document
  const updateDocument = async (id, updates) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const updatedDocument = await updateDoc(doc(ref, id), { updates });
      dispatchIfNotCancelled({
        type: "UPDATED_DOCUMENT",
        payload: updatedDocument,
      });
      return updatedDocument;
    } catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error });
      return null;
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, updateDocument, response };
};

// import { useReducer, useEffect, useState } from "react";
// import { db, timestamp } from "../firebase/config.js";
// import {
//   doc,
//   addDoc,
//   deleteDoc,
//   serverTimestamp,
//   collection,
//   setDoc,
//   Timestamp,
// } from "firebase/firestore";

// let initialState = {
//   document: null,
//   isPending: false,
//   error: null,
//   success: null,
// };

// const firestoreReducer = (state, action) => {
//   switch (action.type) {
//     case "IS_PENDING":
//       return { isPending: true, document: null, success: false, error: null };
//     case "ADDED_DOCUMENT":
//       return {
//         isPending: false,
//         document: action.payload,
//         success: true,
//         error: null,
//       };
//     case "DELETED_DOCUMENT":
//       return { isPending: false, document: null, success: true, error: null };
//     case "ERROR":
//       return {
//         isPending: false,
//         document: null,
//         success: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const useFirestore = (c) => {
//   const [response, dispatch] = useReducer(firestoreReducer, initialState);
//   const [isCancelled, setIsCancelled] = useState(false);

//   // collection ref
//   const ref = collection(db, c);

//   // only dispatch is not cancelled
//   const dispatchIfNotCancelled = (action) => {
//     if (!isCancelled) {
//       dispatch(action);
//     }
//   };

//   // add a document
//   const addDocument = async (doc) => {
//     dispatch({ type: "IS_PENDING" });

//     try {
//       const createdAt = Timestamp.fromDate(new Date("December 10, 1815"));
//       const addedDocument = await addDoc(ref, { ...doc, createdAt });
//       dispatchIfNotCancelled({
//         type: "ADDED_DOCUMENT",
//         payload: addedDocument,
//       });
//     } catch (err) {
//       dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
//     }
//   };

//   // delete a document
//   const deleteDocument = async (id) => {
//     dispatch({ type: "IS_PENDING" });

//     try {
//       await deleteDoc(doc(ref, id));
//       dispatchIfNotCancelled({ type: "DELETED_DOCUMENT" });
//     } catch (err) {
//       dispatchIfNotCancelled({ type: "ERROR", payload: "could not delete" });
//     }
//   };

//   useEffect(() => {
//     return () => setIsCancelled(true);
//   }, []);

//   return { addDocument, deleteDocument, response };
// };

// import { doc, setDoc, Timestamp } from "firebase/firestore";

// const docData = {
//     stringExample: "Hello world!",
//     booleanExample: true,
//     numberExample: 3.14159265,
//     dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
//     arrayExample: [5, true, "hello"],
//     nullExample: null,
//     objectExample: {
//         a: 5,
//         b: {
//             nested: "foo"
//         }
//     }
// };
// await setDoc(doc(db, "data", "one"), docData);

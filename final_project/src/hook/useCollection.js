import { useEffect } from "react";
import { useState, useRef} from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  //Real time collecton data
  useEffect(() => {
    let ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [c]);

  return { documents };
};

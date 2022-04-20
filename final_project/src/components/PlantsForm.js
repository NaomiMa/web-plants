import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

//Adding plants data in real time to firestore
export default function PlantForm() {
  const [newPlant, setNewPlant] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "plants"), {
      name: newPlant,
    });
    setNewPlant("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewPlant(e.target.value)}
          value={newPlant}
        />
      </label>
      <button>Add</button>
    </form>
  );
}

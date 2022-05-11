import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";
import TransferList from "./tagsList";
import { Container } from "@mui/material";

//Adding plants data in real time to firestore
export default function PlantForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [treatment, setTreatment] = useState("");
  const [newPlant, setNewPlant] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "plants"), {
      name: name,
      description: description,
      treatment: treatment,
    });

    setNewPlant("");
  };

  return (
    <Container>
      <h1>הוספת צמח</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>שם הצמח</h3>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <h3>תיאור</h3>
          <input
            required
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <label>
          <h3>אופן הטיפול</h3>
          <input
            required
            type="text"
            onChange={(e) => setTreatment(e.target.value)}
            value={treatment}
          />
        </label>
        <br /><br/>
        <TransferList />
        <br />
        <button>הוספה</button>
      </form>
    </Container>
  );
}

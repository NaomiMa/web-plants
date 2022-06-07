import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Select from "react-select";
import { useCollection } from "../hook/useCollection";
import { useFirestore } from "../hook/useFirestore";

//Adding plants data in real time to firestore
export default function PlantForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [treatment, setTreatment] = useState("");
  const [newPlant, setNewPlant] = useState("");
  const { documents } = useCollection("tags");
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState([]);
  const { addDocument, response } = useFirestore("plants");

  useEffect(() => {
    if (documents) {
      const options = documents.map((tag) => {
        return { value: tag, label: tag.tagName };
        // return { value: { ...tag, id: tag.uid }, label: tag.tagName };
      });
      setTags(options);
      console.log(options);
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentTagList = currentTag.map((u) => {
      return {
        tagName: u.value.tagName,
        id: u.value.id,
        category: u.value.category,
      };
    });
    console.log(currentTagList);

    await addDoc(collection(db, "plants"), {
      name: name,
      description: description,
      treatment: treatment,
      currentTagList,
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
        <br />
        <br />
        <label>
          <span>בחרת תגיות קשורות:</span>
          <Select
            onChange={(option) => setCurrentTag(option)}
            options={tags}
            isMulti
          />
        </label>
        <br />
        <button>הוספה</button>
      </form>
    </Container>
  );
}

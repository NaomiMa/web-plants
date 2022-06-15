//להוסיף שגיאה על תאים ריקים

import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";
import { Container } from "@mui/material";
import Select from "react-select";
import { useCollection } from "../hook/useCollection";
import { useFirestore } from "../hook/useFirestore";
import { tagsList } from "../tagsList";

//Adding plants data in real time to firestore
export default function PlantForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [treatment, setTreatment] = useState("");
  const [newPlant, setNewPlant] = useState("");
  const { documents } = useCollection("tags");
  // const [tags, setTags] = useState([]);
  // const [currentTag, setCurrentTag] = useState([]);
  const [location, setLocation] = useState([]);
  const [type, setType] = useState([]);
  const [water, setWater] = useState([]);

  const { addDocument, response } = useFirestore("plants");

  // useEffect(() => {
  //   if (documents) {
  //     const options = tagsList.map((tag) => {
  //       return tag;
  //       // return { value: { ...tag, id: tag.uid }, label: tag.tagName };
  //     });
  //     setTags(options);
  //     console.log(options);
  //   }
  // }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const currentTagList = currentTag.map((u) => {
    //   return {
    //     location: u.value,
    //     type: u,
    //     water: u,
    //   };
    // });
    // console.log(currentTagList);

    await addDoc(collection(db, "plants"), {
      name: name,
      description: description,
      treatment: treatment,
      // currentTagList,
      location: location,
      type: type,
      water: water,
    });
    console.log();
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
            onChange={(option1) => setLocation(option1)}
            required
            isMulti
            options={tagsList.location}
          ></Select>
        </label>
        <br />
        <span>בחרת תגיות קשורות:</span>
        <label>
          <Select
            onChange={(option2) => setType(option2)}
            required
            isMulti
            options={tagsList.type}
          ></Select>
        </label>
        <br />
        <span>בחרת תגיות קשורות:</span>
        <label>
          <Select
            onChange={(option3) => setWater(option3)}
            required
            isMulti
            options={tagsList.water}
          ></Select>
        </label>
        <br />
        <button>הוספה</button>
      </form>
    </Container>
  );
}

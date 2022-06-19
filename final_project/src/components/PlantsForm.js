import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage, db } from "../firebase/config.js";
import Select from "react-select";
import { useFirestore } from "../hook/useFirestore";
import { tagsList } from "../tagsList";

//import style
import { Container } from "@mui/material";
import "./PlantsForm.css";

//Adding plants data in real time to firestore
export default function PlantForm() {
  const [newPlant, setNewPlant] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [treatmentDes, setTreatmentDes] = useState("");

  const [location, setLocation] = useState([]);
  const [type, setType] = useState([]);
  const [treatment, setTreatment] = useState([]);
  const [light, setLight] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [size, setSize] = useState([]);
  const [purpose, setPurpose] = useState([]);
  const [season, setSeason] = useState([]);
  const [experience, setExperience] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 1000000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // upload user thumbnail
    const uploadPath = `plantsLogo/${thumbnail.name}`;
    const img = await uploadBytes(ref(storage, uploadPath), thumbnail);
    const imgUrl = await getDownloadURL(img.ref);

    await addDoc(collection(db, "plants"), {
      name: name,
      description: description,
      treatmentDes: treatmentDes,
      location: location,
      type: type,
      treatment: treatment,
      light: light,
      flowers: flowers,
      size: size,
      purpose: purpose,
      season: season,
      experience: experience,
      photoURL: imgUrl,
      
    });
    console.log();
    setNewPlant("");
  };

  return (
    <Container>
      <div className="form">
        <h1>הוספת צמח</h1>
        <form className="select" onSubmit={handleSubmit} dir="rtl">
          <label>
            <h3>שם הצמח:</h3>
            <input
              required
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label>
            <h3>תיאור:</h3>
            <input
              required
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </label>
          <label>
            <h3>אופן הטיפול:</h3>
            <input
              required
              type="text"
              onChange={(e) => setTreatmentDes(e.target.value)}
              value={treatmentDes}
            />
          </label>
        
          <label>
            <h3>בחר תגיות קשורות:</h3>
            <span>בחר מיקום:</span>
            <Select
              onChange={(option1) => setLocation(option1)}
              required
              isMulti
              placeholder={"בחר תשובה"}
              options={tagsList.location}
            ></Select>
          </label>
          <span>בחר סוג צמח:</span>
          <label>
            <Select
              onChange={(option) => setType(option)}
              required
              isMulti
              placeholder={"בחר תשובה"}
              options={tagsList.type}
            ></Select>
          </label>
          <span>בחר אופן טיפול בצמח:</span>
          <label>
            <Select
              onChange={(option) => setTreatment(option)}
              required
              isMulti
              placeholder={"בחר תשובה"}
              options={tagsList.treatment}
            ></Select>
          </label>
          <span>בחר תאורה נדרשת לצמח:</span>
          <label>
            <Select
              onChange={(option) => setLight(option)}
              required
              isMulti
              placeholder={"בחר תשובה"}
              options={tagsList.light}
            ></Select>
          </label>
          <span>בחר כמות הפרחים בצמח:</span>
          <label>
            <Select
              onChange={(option) => setFlowers(option)}
              required
              isMulti
              placeholder={"בחר תשובה"}
              options={tagsList.flowers}
            ></Select>
          </label>
          <span>בחר את גודל ממוצע לצמח:</span>
          <label>
            <Select
              onChange={(option) => setSize(option)}
              required
              isMulti
              placeholder={"בחר תשובה"}
              options={tagsList.size}
            ></Select>
          </label>
          <span>בחר את מטרתו בעיקרית של הצמח:</span>
          <label>
            <Select
              onChange={(option) => setPurpose(option)}
              required
              isMulti
              placeholder={"בחר תשובה"}
              options={tagsList.purpose}
            ></Select>
          </label>
          <span>בחר את עונת הצמיחה של הצמח:</span>
          <label>
            <Select
              onChange={(option) => setSeason(option)}
              required
              isMulti
              placeholder={"בחר תשובה"}
              options={tagsList.season}
            ></Select>
          </label>
          <span>בחר מהי רמת הניסיון שצריך לגדל את הצמח:</span>
          <label>
            <Select
              onChange={(option) => setExperience(option)}
              required
              isMulti
              placeholder={"בחר תשובה"}
              options={tagsList.experience}
            ></Select>
          </label>
          <label>
            <span>תמונת צמח:</span>
            <input
              required
              label="תמונת פרופיל"
              type="file"
              onChange={handleFileChange}
            />
            {thumbnailError && <div className="error">{thumbnailError}</div>}
          </label>
          <br />
          <br />
          <button className="btn">הוספה</button>
        </form>
      </div>
      <br />
      <br />
    </Container>
  );
}

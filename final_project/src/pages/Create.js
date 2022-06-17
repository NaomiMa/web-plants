import { useState, useEffect } from "react";
import { useCollection } from "../hook/useCollection";
import { useFirestore } from "../hook/useFirestore";
import { serverTimestamp, Timestamp } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";



import { useAuthContext } from "../hook/useAuthContext.js";
import { db, storage} from "../firebase/config.js";
import Select from "react-select";

// styles
import "./Create.css";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

const categories = [
  { value: "questions", label: "שאלות" },
  { value: "tips", label: "עצות" },
  { value: "news", label: "חדשות" },
  { value: "sharings", label: "שיתופים" },
  { value: "recommendations", label: "המלצות" },
];

export default function Create() {
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore("posts");
  const { user } = useAuthContext();
  const { documents } = useCollection("tags");
  const [users, setUsers] = useState([]);

  // form field values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTag] = useState([]);
  const [formError, setFormError] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

 

  // create user values for react-select
  useEffect(() => {
    if (documents) {
      setUsers(
        documents.map((tag) => {
          return { value: { ...tag, id: tag.uid }, label: tag.tagName };
        })
      );
    }
    console.log(documents);
  }, [documents]);

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
    setFormError(null);

    if (!category) {
      setFormError("יש לבחור נושא");
      return;
    }
    // if (tags.length < 1) {
    //   setFormError("יש לבחור לפחות תג אחד");
    //   return;
    // }

    const uploadPath = `postImage/${thumbnail.name}`;
    const img = await uploadBytes(ref(storage, uploadPath), thumbnail);
    const imgUrl = await getDownloadURL(img.ref);

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const tagsList = tags.map((u) => {
      return {
        tagName: u.value.tagName,
        tagCategory: u.value.category,
        // tagId: u.value.uid,
      };
    });

    const post = {
      name: name,
      details: details,
      category: category.value,
      dueDate: Timestamp.fromDate(new Date()),
      tagsList,
      createdBy: createdBy,
      comments: [],
      photoURL: imgUrl
    };

    await addDocument(post);
    if (!response.error) {
      console.log(post);
      console.log(response);
      navigate("/forum");
    }
  };

  return (
    <Container>
      <div className="create-form" dir="rtl">
        <div className="page-title">
      <h1 className="h1">שאל שאלה</h1>
      <form  onSubmit={handleSubmit}>
        <label>
          <span>כותרת:</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>תוכן השאלה:</span>
          <textarea
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        {/* <label>
          <span>Set due date:</span>
          <input
            required
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label> */}
        <label>
          <span>בחר נושא:</span>
          <Select
            onChange={(option) => setCategory(option)}
            options={categories}
          />
        </label>
        {/* <label>
          <span>בחרת תגיות קשורות:</span>
          <Select
            onChange={(option) => setTag(option)}
            options={tagsList}
            isMulti
          />
        </label> */}
    <label>
            <span>הוספת תמונה:</span>
            <input
              label="תמונת פרופיל"
              type="file"
              onChange={handleFileChange}
            />
            {thumbnailError && <div className="error">{thumbnailError}</div>}
          </label>
          <br />
            <br />
            
              <button className="btn">פרסם</button>
          
            {formError && <p className="error">{formError}</p>}
             <br />
        <br />
          </form>
          </div>
      </div>
    </Container>
  );
}

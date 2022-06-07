
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";
// import TransferList from "./tagsLit";
import { Container } from "@mui/material";
import { useAuthContext } from "../hook/useAuthContext";

//Adding plants data in real time to firestore
export default function AddPost() {
  const {user } = useAuthContext()
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
    const [date, setDate] = useState(`${new Date().toLocaleString()}`);
    const [newPost, setNewPost] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
        author: author,
        title: title,
        content: content,
        date: date
    });

    setNewPost("");
  };

  return (
    <Container>
      <h1>הוספת שאלה</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>שם</h3>
          <input
            required
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </label>
        <label>
          <h3>כותרת</h3>
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <h3>תוכן הפוסט</h3>
          <input
            required
            type="text"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
              </label>
              <label>
          <h3>תאריך</h3>
          <input
            required
            type="text"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <br /><br/>
        {/* <TransferList /> */}
        <br />
        <button>הוספה</button>
      </form>
    </Container>
  );
}

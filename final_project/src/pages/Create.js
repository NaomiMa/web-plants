import { useState, useEffect } from "react";
import { useCollection } from "../hook/useCollection";
import { useFirestore } from "../hook/useFirestore";
import { serverTimestamp, Timestamp } from "firebase/firestore";
import { useAuthContext } from "../hook/useAuthContext.js";
import { timestamp } from "../firebase/config.js";
import Select from "react-select";

// styles
import "./Create.css";
import { useNavigate } from "react-router-dom";

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
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);

  // form field values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  // create user values for react-select
  useEffect(() => {
    if (documents) {
      setUsers(
        documents.map((user) => {
          return { value: { ...user, id: user.uid }, label: user.displayName };
        })
      );
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("יש לבחור נושא");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError("יש לבחור לפחות תג אחד");
      return;
    }
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };
    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id,
      };
    });

    const post = {
      name: name,
      details: details,
      category: category.value,
     dueDate: Timestamp.fromDate(new Date()),
      assignedUsersList: assignedUsersList,
      createdBy: createdBy,
      comments: [],
    };

    await addDocument(post);
    if (!response.error) {
      console.log(post)
      console.log(response);
      navigate("/");
    }
  };

  return (
    <div className="create-form">
      <h2 className="page-title">שאל שאלה</h2>
      <form onSubmit={handleSubmit}>
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
        <label>
          <span>Set due date:</span>
          <input
            required
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>בחר נושא:</span>
          <Select
            onChange={(option) => setCategory(option)}
            options={categories}
          />{" "}
        </label>
        <label>
          <span>בחרת תגיות קשורות:</span>
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti
          />
        </label>

        <button className="btn">פרסם</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

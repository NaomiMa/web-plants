import { useState } from "react";
import { useSignup } from "../../hook/useSignup";

// styles
import "../Signup/Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();

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
    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      signup(email, password, displayName, thumbnail);
      console.log(email, password, displayName, thumbnail);
    } else alert("סיסמא לא תואמת");
  };

  return (
    <from onSubmit={handleSubmit} className="auth-form" dir="rtl">
      <h2>הרשמה:</h2>
      <label>
        <span>דןא"ל:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>סיסמא:</span>
        <input
          required
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>הזן סיסמא בשנית:</span>
        <input
          required
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
      </label>
      <label>
        <span>שם משתמש:</span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>תמונת פרופיל:</span>
        <input
          required
          label="תמונת פרופיל"
          type="file"
          onChange={handleFileChange}
        />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      <br /> <br />
      {/* לבדוק למה הכפתור לא מתקשר */}
      {/* <Button variant="outlined">Sign up</Button> */}
      {!isPending && <button className="btn">הרשם</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </from>
  );
}

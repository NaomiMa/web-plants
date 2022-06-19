import React from "react";
import { useNavigate } from "react-router-dom";
import { useCollection } from "../hook/useCollection.js";
import Results from "./Results";

export default function GoToRes() {
  const { documents: plants } = useCollection("plants", ["uid"]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/plants");
  };

  return (
    <div>
      {plants && <Results plants={plants} />}
      <button className="btn" onClick={handleClick}>
        חזרה לצמחים
      </button>
      <br />
      <br />
    </div>
  );
}

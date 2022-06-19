import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantsForm from "../components/PlantsForm";
import PlantsList from "../components/PlantsList";
import { useCollection } from "../hook/useCollection.js";

export default function Plants() {
  const { documents: plants } = useCollection("plants", ["uid"]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/plants/:plantsForm");
  };
  return (
    <div>
      {plants && <PlantsList plants={plants} />}
      <button className="btn" onClick={handleClick}>
        הוספת צמח
      </button>
      {/* <PlantsForm /> */}
    </div>
  );
}

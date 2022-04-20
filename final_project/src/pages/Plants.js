import React from "react";
import { useEffect, useState } from "react";
import PlantsForm from "../components/PlantsForm.js";
import PlantsList from "../components/PlantsList";
import { useCollection } from "../hook/useCollection.js";

export default function Plants() {
const { documents: plants} = useCollection('plants')
  

  return (
    <div>
      {plants && <PlantsList plants={plants} />}
      <PlantsForm />
    </div>
  );
}

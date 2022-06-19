import React from "react";
import { tagsList } from "../tagsList";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import { useCollection } from "../hook/useCollection";
import {
  getDoc,
  doc,
  getDocs,
  collection,
  onSnapshot,
  query,
  where,
  collectionGroup,
  updateDoc,
  FieldValue,
  increment,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { Button, Container } from "@mui/material";
import "./Questionnaire.css";

export default function Questionnaire() {
  const navigate = useNavigate();

  const [location, setLocation] = useState([]);
  const [type, setType] = useState([]);
  const [treatment, setTreatment] = useState([]);
  const [light, setLight] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [size, setSize] = useState([]);
  const [purpose, setPurpose] = useState([]);
  const [season, setSeason] = useState([]);
  const [experience, setExperience] = useState([]);

  const colRef = collection(db, "plants");

  const handleClick = async (e) => {
    {
      const plantLocation = query(
        collectionGroup(db, "plants"),
        where("location", "array-contains-any", location)
      );
      const querySnapshot = await getDocs(plantLocation);
      querySnapshot.forEach((docu) => {
        updateDoc(doc(colRef, docu.id), { count: increment(+1) });
        console.log(docu.id, " => ", docu.data());
      });
    }

    {
      const plantType = query(
        collectionGroup(db, "plants"),
        where("type", "array-contains-any", type)
      );
      const querySnapshot = await getDocs(plantType);
      querySnapshot.forEach((docu) => {
        updateDoc(doc(colRef, docu.id), { count: increment(+1) });
        console.log(docu.id, " => ", docu.data());
      });
    }
    {
      const plantTreatment = query(
        collectionGroup(db, "plants"),
        where("treatment", "array-contains-any", treatment)
      );
      const querySnapshot = await getDocs(plantTreatment);
      querySnapshot.forEach((docu) => {
        updateDoc(doc(colRef, docu.id), { count: increment(+1) });
        console.log(docu.id, " => ", docu.data());
      });
    }
    {
      const plantLight = query(
        collectionGroup(db, "plants"),
        where("light", "array-contains-any", light)
      );
      const querySnapshot = await getDocs(plantLight);
      querySnapshot.forEach((docu) => {
        updateDoc(doc(colRef, docu.id), { count: increment(+1) });
        console.log(docu.id, " => ", docu.data());
      });
    }
    {
      const plantFlowers = query(
        collectionGroup(db, "plants"),
        where("flowers", "array-contains-any", flowers)
      );
      const querySnapshot = await getDocs(plantFlowers);
      querySnapshot.forEach((docu) => {
        updateDoc(doc(colRef, docu.id), { count: increment(+1) });
        console.log(docu.id, " => ", docu.data());
      });
    }
    {
      const plantSize = query(
        collectionGroup(db, "plants"),
        where("size", "array-contains-any", size)
      );
      const querySnapshot = await getDocs(plantSize);
      querySnapshot.forEach((docu) => {
        updateDoc(doc(colRef, docu.id), { count: increment(+1) });
        console.log(docu.id, " => ", docu.data());
      });
    }
    {
      const plantPurpose = query(
        collectionGroup(db, "plants"),
        where("purpose", "array-contains-any", purpose)
      );
      const querySnapshot = await getDocs(plantPurpose);
      querySnapshot.forEach((docu) => {
        updateDoc(doc(colRef, docu.id), { count: increment(+1) });
        console.log(docu.id, " => ", docu.data());
      });
    }
    {
      const plantSeason = query(
        collectionGroup(db, "plants"),
        where("season", "array-contains-any", season)
      );
      const querySnapshot = await getDocs(plantSeason);
      querySnapshot.forEach((docu) => {
        updateDoc(doc(colRef, docu.id), { count: increment(+1) });
        console.log(docu.id, " => ", docu.data());
      });
    }
    {
      const plantExperience = query(
        collectionGroup(db, "plants"),
        where("experience", "array-contains-any", experience)
      );
      const querySnapshot = await getDocs(plantExperience);
      querySnapshot.forEach((docu) => {
        updateDoc(doc(colRef, docu.id), { count: increment(+1) });
        console.log(docu.id, " => ", docu.data());
      });
    }

    navigate("/questionnarie/:gotoresults");

    e.preventDefault();
  };

  return (
    <div>
      <Container>
        {" "}
        <div className="quest-page" dir="rtl">
          <h1 className="h1">שאלון התאמה לצמח</h1>

          <label>
            <span>שאלה1: לאיזה מיקום תרצה את הצמח?</span>
            <Select
              placeholder={"בחר תשובה"}
              onChange={(option) => setLocation(option)}
              required
              isMulti
              options={tagsList.location}
            ></Select>
          </label>
          <br />
          <span>שאלה 2: באיזה סוג צמח אתה מעוניין?</span>
          <label>
            <Select
              placeholder={"בחר תשובה"}
              onChange={(option) => setType(option)}
              required
              isMulti
              options={tagsList.type}
            ></Select>
          </label>
          <br />
          <label>
            <span>שאלה 3: מהי כמות הטיפול שתוכל להעניק לצמח?</span>
            <Select
              placeholder={"בחר תשובה"}
              onChange={(option) => setTreatment(option)}
              required
              isMulti
              options={tagsList.treatment}
            ></Select>
          </label>
          <br />
          <label>
            <span>שאלה 4: מהם תנאי התאורה שיהיו לצמח?</span>
            <Select
              placeholder={"בחר תשובה"}
              onChange={(option) => setLight(option)}
              required
              isMulti
              options={tagsList.light}
            ></Select>
          </label>
          <br />
          <label>
            <span>שאלה 5: האם תרצה צמח עם פרחים?</span>
            <Select
              placeholder={"בחר תשובה"}
              onChange={(option) => setFlowers(option)}
              required
              isMulti
              options={tagsList.flowers}
            ></Select>
          </label>
          <br />
          <label>
            <span>שאלה 6: באיזה גודל צמח אתה מעוניין?</span>
            <Select
              placeholder={"בחר תשובה"}
              onChange={(option) => setSize(option)}
              required
              isMulti
              options={tagsList.size}
            ></Select>
          </label>
          <br />
          <label>
            <span>שאלה 7: לאיזה מטרה תרצה את הצמח?</span>
            <Select
              placeholder={"בחר תשובה"}
              onChange={(option) => setPurpose(option)}
              required
              isMulti
              options={tagsList.purpose}
            ></Select>
          </label>
          <br />
          <label>
            <span>שאלה 8: האם אתה מעוניין בצמח עונתי?</span>
            <Select
              placeholder={"בחר תשובה"}
              onChange={(option) => setSeason(option)}
              required
              isMulti
              options={tagsList.season}
            ></Select>
          </label>
          <br />
          <label>
            <span>שאלה 9: מהי רמת הניסיון שלך בגידול צמחים?</span>
            <Select
              placeholder={"בחר תשובה"}
              onChange={(option) => setExperience(option)}
              required
              isMulti
              options={tagsList.experience}
            ></Select>
          </label>
        </div>
        <br />
        <br />
        <button className="btn" onClick={handleClick}>
          חפש לי את הצמח המתאים עבורי
        </button>
       
        <br />
        <br />
        <br />
        <br />

      </Container>
    </div>
  );
}

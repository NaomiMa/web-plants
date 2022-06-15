import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase/config"


//List of plants collection
export default function BooksList({ plants }) {

  //Delete plants function from firestore
  const handleClick = async (id) => {
    const docRef = doc(db, 'plants', id)
   await deleteDoc(docRef)
  }

  return (
    <div className="plant-list">
      <ul>
        {plants.map(plant => (
          <li key={plant.id} onClick={() => handleClick(plant.id)}>{plant.name} טיפ:{plant.id}</li>
        ))}
      </ul>
    </div>
  )
}
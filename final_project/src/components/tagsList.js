import React from 'react'
      import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase/config"

export default function TagsList({tags}) {
  return (
    <ul>
 
    <div className="tags-list">
      <ul>
        {tags.map(tag => (
          <li key={tag.id} >{tag.name} </li>
        ))}
      </ul>
    </div>
  
    </ul>
  )
}

import { useState } from "react";

const filterList = [
  "all",
  "mine",
  "questions",
  "tips",
  "news",
  "sharings",
  "recommendations",
];

export default function PostFilter({ changeFilter }) {
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter);
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter" dir='rtl'>
      <nav>
        <p>סנן לפי:   </p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}

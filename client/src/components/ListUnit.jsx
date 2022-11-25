import React from "react";

function ListUnit({ forum }) {
  const { id, category, heading, created_at, updated_at } = forum;

  // Intended for use with: ForumsHome(Main Forums), SubForums, SubForumTopics, ClassifiedCategories
  return (
    <div>
      <h2>{category}</h2>
      <h2>{heading}</h2>
    </div>
  );
}

export default ListUnit;

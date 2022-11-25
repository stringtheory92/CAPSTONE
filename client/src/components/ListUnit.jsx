import React from "react";

function ListUnit({ forum, onMainForumSelect, onSubForumSelect }) {
  const { id, category, heading, created_at, updated_at } = forum;

  // Intended for use with: ForumsHome(Main Forums), SubForums, SubForumTopics, ClassifiedCategories
  return (
    <div>
      <h2>{category}</h2>
      <h2>{heading}</h2>
      {onMainForumSelect ? (
        <button onClick={(e) => onMainForumSelect(e, id)}>Select</button>
      ) : null}
      {onSubForumSelect ? (
        <button onClick={(e) => onSubForumSelect(e, id)}>Select</button>
      ) : null}
    </div>
  );
}

export default ListUnit;

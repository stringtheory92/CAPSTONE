import React from "react";
import { useNavigate } from "react-router-dom";
import { MainForumItem } from "./shared";

function ListUnit({
  forum,
  onMainForumSelect,
  onSubForumSelect,
  onSubForumTopicSelect,
}) {
  const { id, category, heading, created_at, updated_at } = forum;
  const navigate = useNavigate();

  // Intended for use with: ForumsHome(Main Forums), SubForums, SubForumTopics, ClassifiedCategories
  return (
    <>
      {onMainForumSelect ? (
        <MainForumItem onClick={(e) => onMainForumSelect(e, id)}>
          <h2>{category}</h2>
          <h2>{heading}</h2>
        </MainForumItem>
      ) : null}
      {onSubForumSelect ? (
        <MainForumItem onClick={(e) => onSubForumSelect(e, id)}>
          <h2>{category}</h2>
          <h2>{heading}</h2>
        </MainForumItem>
      ) : null}
      {onSubForumTopicSelect ? (
        <MainForumItem onClick={(e) => onSubForumTopicSelect(e, id)}>
          <h2>{category}</h2>
          <h2>{heading}</h2>
        </MainForumItem>
      ) : null}
    </>
    // <MainForumItem >
    //   <h2>{category}</h2>
    //   <h2>{heading}</h2>
    //   {onMainForumSelect ? (
    //     <button onClick={(e) => onMainForumSelect(e, id)}>Select</button>
    //   ) : null}
    //   {onSubForumSelect ? (
    //     <button onClick={(e) => onSubForumSelect(e, id)}>Select</button>
    //   ) : null}
    //   {onSubForumTopicSelect ? (
    //     <button onClick={(e) => onSubForumTopicSelect(e, id)}>Select</button>
    //   ) : null}
    // </MainForumItem>
  );
}

export default ListUnit;

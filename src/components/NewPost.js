import React from "react";
import "./NewPost.css";
import { UilPlus } from "@iconscout/react-unicons";

const NewPost = () => {
  return (
    <div className="newPost">
      <p>Create new post on arclif</p>
      <span>
        <UilPlus className="plusIcon" />
      </span>
    </div>
  );
};

export default NewPost;

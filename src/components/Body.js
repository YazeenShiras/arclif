import React from "react";
import "./Body.css";
import MarketPlace from "./MarketPlace";
import Messages from "./Messages";
import NewPost from "./NewPost";
import Options from "./Options";
import PostCard from "./PostCard";
import Speil from "./Speil";
import Suggested from "./Suggested";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import user1 from "../assets/profiles/user1.png";
import user5 from "../assets/profiles/user5.png";
import user8 from "../assets/profiles/user8.png";

const Body = () => {
  return (
    <div className="body">
      <div className="left__bodyContainer">
        <div className="optionsContaniner">
          <Options />
        </div>
        <div className="marketPlaceContainer">
          <MarketPlace />
        </div>
      </div>
      <div className="center__bodyContainer">
        <div className="speilContainer">
          <Speil />
        </div>
        <div className="newPostContainer">
          <NewPost />
        </div>
        <div className="postCardContainer">
          <PostCard avatar={user1} image={img7} />
          <PostCard avatar={user5} image={img8} />
          <PostCard
            avatar={user8}
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
          />
        </div>
      </div>
      <div className="right__bodyContainer">
        <Messages />
        <Suggested />
      </div>
    </div>
  );
};

export default Body;

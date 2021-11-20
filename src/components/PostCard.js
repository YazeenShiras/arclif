import React from "react";
import "./PostCard.css";
import { UilEllipsisV } from "@iconscout/react-unicons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import { UilEye } from "@iconscout/react-unicons";
import { UilHeart } from "@iconscout/react-unicons";
import comments from "../assets/icons/comments.png";
import share from "../assets/icons/share.png";
import superchat from "../assets/icons/superchat.png";
import smile from "../assets/icons/smile.png";
import send from "../assets/icons/send.png";

const PostCard = ({ avatar, image }) => {
  return (
    <div className="postCard">
      <div className="title__postCard">
        <div className="left__title__postCard">
          <div className="avatar__postCard">
            <img src={avatar} alt="" />
          </div>
          <h3>John Doe</h3>
        </div>
        <div className="right__title__postCard">
          <UilEllipsisV className="optionIcon__postCard" />
        </div>
      </div>
      <div className="image__postCard">
        <img src={image} alt="" />
      </div>
      <div className="iconsContainer__postCard">
        <div className="leftIcons__postCard">
          <FontAwesomeIcon
            icon={faHeart}
            className="heartIcon iconsPostcard__fntasm"
            id="heartIcon__liked"
          />
          <UilHeart
            className="iconPostCard heartIcon__unlike"
            id="heartIcon__unlike"
          />
          <img src={comments} alt="" className="iconPostCard commentIcon" />
          <img src={share} alt="" className="iconPostCard" />
          <img src={superchat} alt="" className="iconPostCard superchatIcon" />
        </div>
        <div className="rightIcons__postCard">
          <div className="viewCount__postCard">
            <UilEye className="eyeIcon iconPostCard" />
            <p>1.7K</p>
          </div>
          <FontAwesomeIcon
            icon={faBookmark}
            className="saveIcon iconsPostcard__fntasm"
          />
        </div>
      </div>
      <div className="descriptionContainer__postCard">
        <h4>Lorem ipsum dolor sit amet consectetur</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          praesentium veritatis voluptatem itaque. Hic quisquam, animi optio
          eveniet nihil voluptates laudantium. ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <h5>24 August 2022</h5>
        <div className="commentSection__postCard">
          <p>
            <span>John Doe</span> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ullam
          </p>
          <p>
            <span>John Doe</span> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ullam
          </p>

          <p className="viewAllComments">View all comments</p>
        </div>
      </div>
      <div className="writeCommentContainer__postCard">
        <div className="writeComment__postCard">
          <input type="text" placeholder="Write your comments" />
          <div className="icons__writeComment">
            <img src={smile} alt="" className="smileIcon" />
            <img src={send} alt="" className="sendIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

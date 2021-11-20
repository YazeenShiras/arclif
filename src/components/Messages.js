import React from "react";
import "./Messages.css";
import messages from "../assets/icons/Messages.png";
import user1 from "../assets/profiles/user1.png";
import user2 from "../assets/profiles/user2.png";
import user3 from "../assets/profiles/user3.png";
import user4 from "../assets/profiles/user4.png";
import user5 from "../assets/profiles/user5.png";
import user6 from "../assets/profiles/user6.png";
import user7 from "../assets/profiles/user7.png";
import user8 from "../assets/profiles/user8.png";

const Messages = () => {
  return (
    <div className="messages">
      <div className="title__messages">
        <img src={messages} alt="" className="messageIcon" />
        <h3>Messages</h3>
      </div>
      <ul>
        <li>
          <div className="left__messages">
            <div className="avatar notified__avatar">
              <img src={user1} alt="avatar" />
            </div>
          </div>
          <div className="right__messages">
            <div className="top">
              <p>6:30 PM</p>
            </div>
            <div className="bottom">
              <h4>John Doe</h4>
              <h5>Lorem ipsum dolor sit amet</h5>
            </div>
            <div className="notificationContaniner">
              <div className="notifier"></div>
            </div>
          </div>
        </li>
        <li>
          <div className="left__messages">
            <div className="avatar">
              <img src={user2} alt="avatar" />
            </div>
          </div>
          <div className="right__messages">
            <div className="top">
              <p>6:30 PM</p>
            </div>
            <div className="bottom">
              <h4>John Doe</h4>
              <h5>Lorem ipsum dolor sit amet</h5>
            </div>
          </div>
        </li>
        <li>
          <div className="left__messages">
            <div className="avatar">
              <img src={user3} alt="avatar" />
            </div>
          </div>
          <div className="right__messages">
            <div className="top">
              <p>Yesterday</p>
            </div>
            <div className="bottom">
              <h4>John Doe</h4>
              <h5>Lorem ipsum dolor sit amet</h5>
            </div>
          </div>
        </li>
        <li>
          <div className="left__messages">
            <div className="avatar">
              <img src={user4} alt="avatar" />
            </div>
          </div>
          <div className="right__messages">
            <div className="top">
              <p>One week ago</p>
            </div>
            <div className="bottom">
              <h4>John Doe</h4>
              <h5>Lorem ipsum dolor sit amet</h5>
            </div>
          </div>
        </li>
        <li>
          <div className="left__messages">
            <div className="avatar">
              <img src={user5} alt="avatar" />
            </div>
          </div>
          <div className="right__messages">
            <div className="top">
              <p>One week ago</p>
            </div>
            <div className="bottom">
              <h4>John Doe</h4>
              <h5>Lorem ipsum dolor sit amet</h5>
            </div>
          </div>
        </li>
        <li>
          <div className="left__messages">
            <div className="avatar">
              <img src={user6} alt="avatar" />
            </div>
          </div>
          <div className="right__messages">
            <div className="top">
              <p>One month ago</p>
            </div>
            <div className="bottom">
              <h4>John Doe</h4>
              <h5>Lorem ipsum dolor sit amet</h5>
            </div>
          </div>
        </li>
        <li>
          <div className="left__messages">
            <div className="avatar">
              <img src={user7} alt="avatar" />
            </div>
          </div>
          <div className="right__messages">
            <div className="top">
              <p>One month ago</p>
            </div>
            <div className="bottom">
              <h4>John Doe</h4>
              <h5>Lorem ipsum dolor sit amet</h5>
            </div>
          </div>
        </li>
        <li>
          <div className="left__messages">
            <div className="avatar">
              <img src={user8} alt="avatar" />
            </div>
          </div>
          <div className="right__messages">
            <div className="top">
              <p>One month ago</p>
            </div>
            <div className="bottom">
              <h4>John Doe</h4>
              <h5>Lorem ipsum dolor sit amet</h5>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Messages;

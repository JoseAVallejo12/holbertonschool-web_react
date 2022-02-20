import React from "react";
import "./Notification.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close_icon.png";
import NotificationItem from "./NotificationItem";
import propTypes from "prop-types";

export default function Notifications(props) {
  return (
    <div className="menuItem">
      <p>Your notifications</p>
      {props.displayDrawer &&
        <div className="Notifications">
          <button
            style={{
              background: "transparent",
              border: "none",
              position: "absolute",
              right: 20,
            }}
            aria-label="close"
          >
            <img src={closeIcon} alt="close-icon" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
          </ul>
        </div>
      }
    </div>

  );
};

Notifications.prototype = {
  displayDrawer: propTypes.bool,
};
Notifications.defaultProps = {
  displayDrawer: false,
};

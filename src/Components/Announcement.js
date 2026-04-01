/** @format */

import React from "react";
import { FiTag } from "react-icons/fi";

const Announcement = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <FiTag className="announcement-icon" />
        <span className="announcement-text">
          FLASH SALE: GET <strong>20% OFF</strong> ON ALL ORDERS! USE CODE: <strong>FOOD20</strong>
        </span>
      </div>
    </div>
  );
};

export default Announcement;

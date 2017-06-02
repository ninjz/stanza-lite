import React from "react";

import "./style.css";

const SZBadge = ({ title, backgroundColor = "red", borderRadius = "15px" }) => (
  <div
    className="SZBadge-container"
    style={{
      backgroundColor,
      borderRadius
    }}
  >
    <span>
      {title}
    </span>
  </div>
);

export default SZBadge;

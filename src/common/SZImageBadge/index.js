import React from "react";

import "./style.css";

const SZImageBadge = ({ imageSrc, width = "50px", height = "50px" }) => (
  <div
    className="SZImageBadge-container"
    style={{
      height,
      width
    }}
  >
    <img className="SZImageBadge-image" src={imageSrc} alt="sz-badge" />
  </div>
);

export default SZImageBadge;

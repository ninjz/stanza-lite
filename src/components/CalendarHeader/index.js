import React from "react";
import SZBadge from "../../common/SZBadge";
import SZImageBadge from "../../common/SZImageBadge";

import "./style.css";

const CalendarHeader = ({ name, background, image, subscriberCount }) => (
  <div
    className="CalendarHeader-container"
    style={{
      backgroundImage: `url(${background})`
    }}
  >
    <h2>
      {name}
    </h2>
    <SZImageBadge imageSrc={image} />
    <SZBadge title={`${subscriberCount} Subscribers`} />
  </div>
);

export default CalendarHeader;

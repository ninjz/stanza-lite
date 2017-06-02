import React from "react";
import moment from "moment";
import SZBadge from "../../common/SZBadge";
import SZImageBadge from "../../common/SZImageBadge";

import "./style.css";

const CalendarEvent = ({ event }) => (
  <div className="Event-container">
    <div className="Event-header">
      <div
        className="Event-header-content"
        style={{
          backgroundImage: `url(${event.images.medium})`
        }}
      >
        {event.homeLogoScraped &&
          event.awayLogoScraped &&
          <div className="Event-team-spread">
            <SZImageBadge imageSrc={event.homeLogoScraped} />
            <SZImageBadge imageSrc={event.awayLogoScraped} />
          </div>}
      </div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
    </div>
    <div className="Event-body">
      <SZBadge
        title={moment(event.dates.start).format("MM/DD/YYYY")}
        backgroundColor="#865EFA"
      />
      <SZBadge
        title={`${moment(event.dates.start).format("h:mm:ss a")} - ${moment(event.dates.end).format("h:mm:ss a")}`}
      />
    </div>
  </div>
);

export default CalendarEvent;

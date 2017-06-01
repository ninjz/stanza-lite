import React from "react";
import moment from "moment";

import "./style.css";

const EventDate = ({ date }) => (
  <div
    style={{
      display: "inline-block",
      backgroundColor: "#865EFA",
      borderRadius: "15px",
      margin: "0 auto",
      padding: "3px 10px 3px 10px"
    }}
  >
    <span
      style={{
        color: "white",
        margin: "0 auto"
      }}
    >
      {moment(date).format("MM/DD/YYYY")}
    </span>
  </div>
);

const EventTime = ({ startDate, endDate }) => (
  <div
    style={{
      display: "inline-block",
      backgroundColor: "#FC4044",
      margin: "0 auto",
      padding: "3px 10px 3px 10px"
    }}
  >
    <span
      style={{
        color: "white",
        margin: "0 auto"
      }}
    >
      {moment(startDate).format("h:mm:ss a")}
      {" - "}
      {moment(endDate).format("h:mm:ss a")}
    </span>
  </div>
);

const TeamLogo = ({ logoSrc }) => (
  <div
    style={{
      alignSelf: "center",
      backgroundColor: "white",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      padding: "3px",
      border: "1px solid black"
    }}
  >
    <img
      src={logoSrc}
      style={{
        maxWidth: "100%",
        maxHeight: "100%"
      }}
    />
  </div>
);

const Event = ({ event }) => (
  <div className="Event-container">
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${event.images.medium})`,
          padding: "3px 0 3px 0",
          minHeight: "80px"
        }}
      >
        {event.homeLogoScraped &&
          event.awayLogoScraped &&
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <TeamLogo logoSrc={event.homeLogoScraped} />
            <TeamLogo logoSrc={event.awayLogoScraped} />
          </div>}
      </div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
    </div>
    <div
      style={{
        flex: 1,
        alignSelf: "flex-end"
      }}
    >
      <EventDate date={event.dates.start} />
      <EventTime startDate={event.dates.start} endDate={event.dates.end} />
    </div>
  </div>
);

export default Event;

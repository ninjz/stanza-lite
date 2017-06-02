import React from "react";
import moment from "moment";
import SZBadge from "../../common/SZBadge";
import SZImageBadge from "../../common/SZImageBadge";

import "./style.css";

class CalendarEvent extends React.Component {
  _renderTime() {
    // event dates could return allDay, TBD...
    // let's account for those, and set the
    // time badge appropriately
    let title, backgroundColor;

    const { dates } = this.props.event;

    if (dates.tbd) {
      title = "TBD";
      backgroundColor = "red";
    } else if (dates.allDay) {
      title = "All Day!";
      backgroundColor = "green";
    } else {
      title = `${moment(dates.start).format("h:mm:ss a")} - ${moment(dates.end).format("h:mm:ss a")}`;
      backgroundColor = "grey";
    }

    return <SZBadge title={title} backgroundColor={backgroundColor} />;
  }

  render() {
    const { event } = this.props;

    return (
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
          {this._renderTime()}
        </div>
      </div>
    );
  }
}

export default CalendarEvent;

import React from "react";
import { gql, graphql } from "react-apollo";

import CalendarHeader from "../CalendarHeader";
import CalendarEvent from "../CalendarEvent";

import "./style.css";

class Calendar extends React.Component {
  _renderEvents() {
    const { calendar } = this.props.data;
    let eventBody;

    if (calendar.events.length > 0) {
      eventBody = calendar.events.edges.map(edge => (
        <CalendarEvent event={edge.noe} key={edge.node._id} />
      ));
    } else {
      eventBody = <div>Sorry, there are no events at the moment</div>;
    }

    return (
      <div className="CalendarEvents-container">
        {eventBody}
      </div>
    );
  }

  render() {
    const data = this.props.data;
    const calendar = data ? data.calendar : null;

    // initial state
    if (!calendar) return null;

    // handle errors
    if (data.error) {
      return (
        <div>
          An error occured. Please try again.
        </div>
      );
    }

    // loading state
    if (!calendar && data.loading) {
      return (
        <div>
          Loading..
        </div>
      );
    }

    return (
      <div className="Calendar-container">
        <CalendarHeader
          name={calendar.name}
          image={calendar.image}
          subscriberCount={calendar.subscriberCount}
          background={calendar.background}
        />
        {this._renderEvents()}
      </div>
    );
  }
}

const CalendarForLayout = gql`
  query CalendarForLayout($shortname: String){ 
    calendar(shortname: $shortname) { 
      name
      subscriberCount
      image
      background
      events(first: 30 filterBy: {past: false}) { 
        # TODO: pagination + fragmentize
        edges {
          node {
            _id
            name
            description
            dates {
              start
              end
              allDay
              tbd
            }
            images {
              medium
            }
            homeLogoScraped
            awayLogoScraped
          }
        }
      }
    } 
  }
`;

export default graphql(CalendarForLayout, {
  // skip query on init
  skip: ({ query }) => query === "",
  options: ({ query }) => ({
    variables: {
      shortname: query
    }
  })
})(Calendar);

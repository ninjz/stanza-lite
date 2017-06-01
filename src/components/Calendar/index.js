import React from "react";
import { gql, graphql } from "react-apollo";

import CalendarHeader from "../CalendarHeader";
import CalendarEvent from "../CalendarEvent";

class Calendar extends React.Component {
  render() {
    const { data, query } = this.props;
    const { calendar } = data;

    if (!calendar && query === "") return null;

    if (!calendar && data.loading)
      return (
        <div>
          Loading..
        </div>
      );

    return (
      <div
        style={{
          margin: "0 auto"
        }}
      >
        <CalendarHeader
          name={calendar.name}
          image={calendar.image}
          subscriberCount={calendar.subscriberCount}
          background={calendar.background}
        />
        <div
          style={{
            display: "-webkit-flex",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            border: "1px solid black",
            paddingTop: "20px",
            backgroundColor: "#DBD9DB",
            marginBottom: "100px"
          }}
        >
          {calendar.events.edges.map(edge => (
            <CalendarEvent event={edge.node} key={edge.node._id} />
          ))}
        </div>
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
  options: ({ query }) => ({
    variables: {
      shortname: query
    }
  })
})(Calendar);

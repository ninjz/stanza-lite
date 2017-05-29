import React from "react";

import Event from "./Event";

const Header = ({ data }) => (
  <div>
    <h2>{data.name}</h2>
    <img src={data.image} />
  </div>
);

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <Header data={this.props.calendar} />
        {this.props.calendar.events.edges.map(edge => (
          <Event event={edge.node} key={edge.node.id} />
        ))}
      </div>
    );
  }
}

export default Calendar;

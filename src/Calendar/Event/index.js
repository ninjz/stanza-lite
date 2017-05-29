import React from "react";

import { graphql, createFragmentContainer } from "react-relay";

const Event = createFragmentContainer(
  ({ event }) => {
    console.log(event);
    return (
      <div>
        event.description
      </div>
    );
  },
  graphql`
    fragment Event_event on Event {
        name
        description
    }
  `
);

export default Event;

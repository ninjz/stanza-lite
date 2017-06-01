import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from "react-apollo";

const networkInterface = createNetworkInterface({
  uri: "https://www.stanza.dance/api/graphql"
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

import React, { Component } from "react";

import Calendar from "../Calendar";
import SearchInput from "../SearchInput";
import environment from "../createEnvironment";

import logo from "./logo.png";
import "./App.css";

export default class App extends Component {
  state = {
    query: ""
  };

  searchCalendar = query => {
    this.setState({
      query
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Stanza-Lite</h2>
        </div>
        <p className="App-intro">
          Search for a StanzaCal
        </p>
        <SearchInput onSearch={this.searchCalendar} />
      </div>
    );
  }
}

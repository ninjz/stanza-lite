import React, { Component } from "react";
import Calendar from "../Calendar";
import SearchInput from "../SearchInput";

import logo from "./logo.png";
import "./App.css";

export default class App extends Component {
  state = {
    query: ""
  };

  searchCalendar = query => {
    // pass query to calendar component
    this.setState({
      query
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" src={logo} alt="logo" />
          <SearchInput onSearch={this.searchCalendar} />
        </div>
        <Calendar query={this.state.query} />
      </div>
    );
  }
}

import React, { Component } from "react";
import JournalList from "./journal/journal_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React, Props, and State Deep Dive</h1>
        <h2>Mekawen el marron que es esto</h2>

        <JournalList heading="List 1" />
      </div>
    );
  }
}
import React, { Component } from "react";
import { API } from "aws-amplify";

export default class Settings extends Component {
  state = {
    isLoading: false
  };

  billUser(details) {
    return API.post("notes", "/billing", {
      body: details
    });
  }

  render() {
    return <div className="Settings" />;
  }
}

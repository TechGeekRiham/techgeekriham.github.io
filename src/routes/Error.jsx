import React, { Component } from "react";

export class Error extends Component {
  render() {
    return (
      <button onClick={() => this.props.homePageRef.current.click()}>
        Return to Home
      </button>
    );
  }
}

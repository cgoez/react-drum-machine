import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Drums.css";

export default class Drums extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.playSound);
    this.audio = new Audio(this.props.source);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.playSound);
  }

  playSound = event => {
    if (event.keycode === this.props.keycode) {
      this.audio.play();
      this.audio.currentTime = 0;
      console.log(this.audio)
    }
  };

  render() {
    return (
      <div className="drumpad">
        <div keycode={this.props.keycode}>
          <h1>{this.props.keyLetter}</h1>
          <audio src={this.props.source} />
        </div>
      </div>
    );
  }
}

Drums.PropTypes = {
  className: PropTypes.string,
  sound: PropTypes.string,
  keycode: PropTypes.number.isRequired,
  keyLetter: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};

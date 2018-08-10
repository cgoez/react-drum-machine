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
    if (event.keyCode === this.props.keyCode) {
      this.audio.play();
      this.audio.currentTime = 0;
      console.log(this.audio);
    }
  };

  render() {
    return (
      <div className="drumpad">
        <div keyCode={this.props.keyCode}>
          <h1 className="letter">{this.props.keyLetter}</h1>
          <h3 className="sound">{this.props.sound}</h3>
          <audio src={this.props.source} />
        </div>
      </div>
    );
  }
}

Drums.PropTypes = {
  className: PropTypes.string,
  sound: PropTypes.string,
  keyCode: PropTypes.number.isRequired,
  keyLetter: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};

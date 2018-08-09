import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DrumRack extends Component {
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
    }
  };

  render() {
    return (
      <div>
        <div keyCode={this.props.keyCode}>
          <h1 className={this.props.className} />
          <audio src={this.props.source} />
        </div>
      </div>
    );
  }
}

DrumRack.PropTypes = {
  className: PropTypes.string,
  keyCode: PropTypes.number.isRequired,
  keyLetter: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};

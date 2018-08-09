import React, { Component } from "react";

export default class DrumKit extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.keyCode === this.props.id) {
      //   this.audio.play()
      //   this.audio.currentTime = 0
      this.playSound();
    }
  };

  playSound = event => {
    const audio = document.getElementById;
  };
}

DrumKit.propTypes = {
  className: propTypes.string,
  keyCode: propTypes.number.isRequired,
  source: propTypes.string.isRequired
};

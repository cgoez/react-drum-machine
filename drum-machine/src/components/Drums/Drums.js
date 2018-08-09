import React, { Component } from "react";
import DrumRack from "../DrumRack/DrumRack";

// import sounds
import boom from "../../sounds/boom.wav";
import clap from "../../sounds/clap.wav";
import hihat from "../../sounds/hihat.wav";
import kick from "../../sounds/kick.wav";
import openhat from "../../sounds/openhat.wav";
import ride from "../../sounds/ride.wav";
import snare from "../../sounds/snare.wav";
import tink from "../../sounds/tink.wav";
import tom from "../../sounds/tom.wav";

export default class Drums extends Component {
  render() {
    return (
      <div>
        <DrumRack className="boom" keyCode={81} source={boom} />
        <DrumRack className="clap" keyCode={87} source={clap} />
        <DrumRack className="hihat" keyCode={69} source={hihat} />
        <DrumRack className="kick" keyCode={65} source={kick} />
        <DrumRack className="openhat" keyCode={83} source={openhat} />
        <DrumRack className="ride" keyCode={68} source={ride} />
        <DrumRack className="snare" keyCode={90} source={snare} />
        <DrumRack className="tink" keyCode={88} source={tink} />
        <DrumRack className="tom" keyCode={67} source={tom} />
      </div>
    );
  }
}

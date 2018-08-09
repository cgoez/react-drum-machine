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
        <DrumRack
          className="boom"
          sound="boom"
          keyCode={81}
          keyLetter="q"
          source={boom}
        />
        <DrumRack
          className="clap"
          sound="clap"
          keyCode={87}
          keyLetter="w"
          source={clap}
        />
        <DrumRack
          className="hihat"
          sound="hihat"
          keyCode={69}
          keyLetter="e"
          source={hihat}
        />
        <DrumRack
          className="kick"
          sound="kick"
          keyCode={65}
          keyLetter="a"
          source={kick}
        />
        <DrumRack
          className="openhat"
          sound="openhat"
          keyCode={83}
          keyLetter="s"
          source={openhat}
        />
        <DrumRack
          className="ride"
          sound="ride"
          keyCode={68}
          keyLetter="d"
          source={ride}
        />
        <DrumRack
          className="snare"
          sound="snare"
          keyCode={90}
          keyLetter="z"
          source={snare}
        />
        <DrumRack
          className="tink"
          sound="tink"
          keyCode={88}
          keyLetter="x"
          source={tink}
        />
        <DrumRack
          className="tom"
          sound="tom"
          keyCode={67}
          keyLetter="c"
          source={tom}
        />
      </div>
    );
  }
}

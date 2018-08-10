import React, { Component } from "react";
import Drums from "../Drums/Drums";

 import './DrumRack.css'

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

export default class DrumRack extends Component {
  render() {
    return (
      <div className="drumracks">
        <Drums
          className="drumpad boom"
          sound="boom"
          keycode={81}
          keyLetter="q"
          source={boom}
        />
        <Drums
          className="drumpad clap"
          sound="clap"
          keycode={87}
          keyLetter="w"
          source={clap}
        />
        <Drums
          className="drumpad hihat"
          sound="hihat"
          keycode={69}
          keyLetter="e"
          source={hihat}
        />
        <Drums
          className="drumpad kick"
          sound="kick"
          keycode={65}
          keyLetter="a"
          source={kick}
        />
        <Drums
          className="drumpad openhat"
          sound="openhat"
          keycode={83}
          keyLetter="s"
          source={openhat}
        />
        <Drums
          className="drumpad ride"
          sound="ride"
          keycode={68}
          keyLetter="d"
          source={ride}
        />
        <Drums
          className="drumpad snare"
          sound="snare"
          keycode={90}
          keyLetter="z"
          source={snare}
        />
        <Drums
          className="drumpad tink"
          sound="tink"
          keycode={88}
          keyLetter="x"
          source={tink}
        />
        <Drums
          className="drumpad tom"
          sound="tom"
          keycode={67}
          keyLetter="c"
          source={tom}
        />
      </div>
    );
  }
}

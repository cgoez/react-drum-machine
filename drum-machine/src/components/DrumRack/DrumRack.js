import React, { Component } from "react";
import Drums from "../Drums/Drums";

import "./DrumRack.css";

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
      <div className="drumrack">
        <div className="grid">
          <Drums
            className="drumpad boom"
            sound="boom"
            keyCode={81}
            keyLetter="Q"
            source={boom}
          />
          <Drums
            className="drumpad clap"
            sound="clap"
            keyCode={87}
            keyLetter="W"
            source={clap}
          />
          <Drums
            className="drumpad hihat"
            sound="hihat"
            keyCode={69}
            keyLetter="E"
            source={hihat}
          />
          <Drums
            className="drumpad kick"
            sound="kick"
            keyCode={65}
            keyLetter="A"
            source={kick}
          />
          <Drums
            className="drumpad openhat"
            sound="openhat"
            keyCode={83}
            keyLetter="S"
            source={openhat}
          />
          <Drums
            className="drumpad ride"
            sound="ride"
            keyCode={68}
            keyLetter="D"
            source={ride}
          />
          <Drums
            className="drumpad snare"
            sound="snare"
            keyCode={90}
            keyLetter="Z"
            source={snare}
          />
          <Drums
            className="drumpad tink"
            sound="tink"
            keyCode={88}
            keyLetter="X"
            source={tink}
          />
          <Drums
            className="drumpad tom"
            sound="tom"
            keyCode={67}
            keyLetter="C"
            source={tom}
          />
        </div>
      </div>
    );
  }
}

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
        <div className="rowOne">
          <Drums
            className="boom"
            sound="boom"
            keyCode={81}
            keyLetter="q"
            source={boom}
          />
          <Drums
            className="clap"
            sound="clap"
            keyCode={87}
            keyLetter="w"
            source={clap}
          />
          <Drums
            className="hihat"
            sound="hihat"
            keyCode={69}
            keyLetter="e"
            source={hihat}
          />
        </div>
        <div className="rowTwo">
          <Drums
            className="kick"
            sound="kick"
            keyCode={65}
            keyLetter="a"
            source={kick}
          />
          <Drums
            className="openhat"
            sound="openhat"
            keyCode={83}
            keyLetter="s"
            source={openhat}
          />
          <Drums
            className="drumpad ride"
            sound="ride"
            keyCode={68}
            keyLetter="d"
            source={ride}
          />
        </div>
        <div className="rowThree">
          <Drums
            className="drumpad snare"
            sound="snare"
            keyCode={90}
            keyLetter="z"
            source={snare}
          />
          <Drums
            className="drumpad tink"
            sound="tink"
            keyCode={88}
            keyLetter="x"
            source={tink}
          />
          <Drums
            className="drumpad tom"
            sound="tom"
            keyCode={67}
            keyLetter="c"
            source={tom}
          />
        </div>
      </div>
    );
  }
}

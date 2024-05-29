"use client";
import Image from "next/image";
import React from "react";
import {
  FaHeart,
  FaPause,
  FaPlay,
  FaRandom,
  FaVolumeDown,
  FaVolumeMute,
  FaVolumeOff,
  FaVolumeUp,
} from "react-icons/fa";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { RxLoop } from "react-icons/rx";

function Player() {

  return (
    <footer>
      <div className="song-info">
        <div className="song-img">
          <Image src={""} alt="Song-Image" height={500} width={500} />
        </div>
        <div className="song-details">
          <p className="song-name">Soniye Je</p>
          <p className="song-artist">Vishal Mishra</p>
        </div>
      </div>
      <div className="control-btns">
        <FaRandom />
        <MdSkipPrevious />
        {/* <FaPause /> */}
        <FaPlay />
        <MdSkipNext />
        <span>
          <RxLoop />
        </span>
      </div>
      <div className="track-record">
        <span className="currentTime">0:00</span>
        <span className="runtime">
          
        </span>
        <span className="totalTime">2:34</span>
      </div>
      <div className="options">
        <FaVolumeMute />
        {/* <FaVolumeOff />
      <FaVolumeDown />
      <FaVolumeUp /> */}
        <FaHeart />
      </div>
    </footer>
  );
}

export default Player;

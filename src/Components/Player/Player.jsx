"use client";
import { setActiveSong } from "@/Redux-Store/slices/ActiveSong";
import Image from "next/image";
import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";

function Player() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongData = async () => {
      const response = await fetch("https://api.jamendo.com/v3.0/albums/tracks/?client_id=dda613cd&format=jsonpretty&limit=1&artist_name=we+are+fm");
      const result = await response.json();
      dispatch(setActiveSong(result.results[0]));
    };

    fetchSongData();
  }, [dispatch]);

  const activeSongState = useSelector((store) => store.active);

  console.log(activeSongState);

  return (
    <footer>
      <div className="song-info">
        <div className="song-img">
          <Image src={activeSongState.image} alt="Song-Image" height={500} width={500} />
        </div>
        <div className="song-details">
          <p className="song-name">{activeSongState.name}</p>
          <p className="song-artist">{activeSongState.artist_name}</p>
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
        <span className="runtime"></span>
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

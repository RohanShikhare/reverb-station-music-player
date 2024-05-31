"use client";
import { setRecentlyPlayed } from "@/Redux-Store/slices/RecentlyPlayed";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
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
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAddedToRecentlyPlayed, setHasAddedToRecentlyPlayed] = useState(false);
  const dispatch = useDispatch();

  const { ActiveSongState } = useSelector((store) => store.active);
  const { RecentlyPlayedSongs } = useSelector((store) => store.recent);

  useEffect(() => {
    setHasAddedToRecentlyPlayed(false);
  }, [ActiveSongState]);

  const handlePlayPause = () => {
    if (!hasAddedToRecentlyPlayed && ActiveSongState) {
      dispatch(setRecentlyPlayed(ActiveSongState));
      setHasAddedToRecentlyPlayed(true);
      console.log(RecentlyPlayedSongs);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <footer>
      <div className="song-info col-4">
        <div className="song-img">
          {ActiveSongState.image && (
            <Image
              src={ActiveSongState.image}
              alt="Song-Image"
              height={500}
              width={500}
            />
          )}
        </div>
        <div className="song-details">
          <p className="song-name">{ActiveSongState.name || "No Song Selected" }</p>
          <p className="song-artist">{ActiveSongState.artist_name || "No Song Selected"}</p>
        </div>
      </div>
      <div className="control-btns col-3 justify-content-center">
        <FaRandom />
        <MdSkipPrevious />
        {isPlaying ? (
          <FaPause onClick={handlePlayPause} />
        ) : (
          <FaPlay onClick={handlePlayPause} />
        )}
        <MdSkipNext />
        <span>
          <RxLoop />
        </span>
      </div>
      <div className="track-record col-3 justify-content-center">
        <span className="currentTime">0:00</span>
        <span className="runtime"></span>
        <span className="totalTime">2:34</span>
      </div>
      <div className="options col-2 justify-content-center">
        <FaVolumeMute />
        {/* <FaVolumeOff />
        <FaVolumeDown />
        <FaVolumeUp /> */}
        <FaHeart />
      </div>

      <audio ref={audioRef} src={ActiveSongState.audio} />
    </footer>
  );
}

export default Player;

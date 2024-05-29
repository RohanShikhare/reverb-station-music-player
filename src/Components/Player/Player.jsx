"use client";
import { setActiveSong } from "@/Redux-Store/slices/ActiveSong";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
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
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchSongData = async () => {
      try {
        const response = await fetch(
          "https://api.jamendo.com/v3.0/albums/tracks/?client_id=dda613cd&format=jsonpretty&limit=1&artist_name=we+are+fm"
        );
        const result = await response.json();
        console.log("API Response:", result);
        if (result.results && result.results.length > 0) {
          dispatch(setActiveSong(result.results[0]));
        } else {
          console.error("No results found in API response.");
        }
      } catch (error) {
        console.error("Error fetching song data:", error);
      }
    };

    fetchSongData();
  }, [dispatch]);

  const { ActiveSongState } = useSelector((store) => store.active);
  console.log("Active Song State:", ActiveSongState);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <footer>
      <div className="song-info">
        <div className="song-img">
          {ActiveSongState.image && (
            <Image
              src={""}
              alt="Song-Image"
              height={500}
              width={500}
            />
          )}
        </div>
        <div className="song-details">
          <p className="song-name">{ActiveSongState.name}</p>
          <p className="song-artist">{ActiveSongState.artist_name}</p>
        </div>
      </div>
      <div className="control-btns">
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
      {ActiveSongState.tracks && ActiveSongState.tracks.length > 0 && (
        <audio ref={audioRef} src={ActiveSongState.tracks[0].audio} />
      )}
    </footer>
  );
}

export default Player;

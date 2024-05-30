"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { FaHeart, FaRegClock, FaUser } from "react-icons/fa";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { setTrendingSongs } from "@/Redux-Store/slices/TrendingSlice";
import { setActiveSong } from "@/Redux-Store/slices/ActiveSong";

function TrendingSongs() {
  const dispatch = useDispatch();
  const { trendingSongs } = useSelector((state) => state.trending);
  const [viewAll, setViewAll] = useState(false);
  const showAll = () => {
    setViewAll(!viewAll);
  };

  useEffect(() => {
    const fetchTrendingSongs = async () => {
      try {
        const response = await fetch(
          "https://api.jamendo.com/v3.0/users/tracks/?client_id=dda613cd&format=jsonpretty&limit=49&order=rating_desc+updatedate_desc&id=972174"
        );
        if (response.ok) {
          const data = await response.json();
          dispatch(setTrendingSongs(data.results[0].tracks));
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTrendingSongs();
  }, [dispatch]);

  function secondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    let formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${minutes}:${formattedSeconds}`;
  }

  return (
    <div className="ts-wrap">
      <div className="ts-topbar">
        <p className="ts-title">Discover Underated Tracks</p>
        <button className="ts-view-all" onClick={() => showAll()}>
          {viewAll ? "View Less" : "View All"}
        </button>
      </div>
      <div className="ts-list">
        <ul className={`${viewAll ? "view-all" : ""}`}>
          {trendingSongs.map((song, index) => (
            <li key={index} onClick={() => {dispatch(setActiveSong(song))}} >
              <div className="song-wrap col-4">
                <span className="ts-number">#{index + 1}</span>
                <div className="song-info">
                  <div className="song-img-wrap">
                    <Image
                      src={song.image}
                      alt={song.name}
                      height={500}
                      width={500}
                    />
                  </div>
                  <div className="song-info-wrap">
                    <p className="song-title">{song.name}</p>
                    <p className="song-author">{song.artist_name}</p>
                  </div>
                </div>
              </div>
              <div className="artist-wrap col-4">
                <FaUser />
                <span className="artist-name">{song.artist_name}</span>
              </div>
              <div className="d-flex justify-content-around col-3">
                <div className="likes-wrap">
                  <AiFillLike />
                  <span className="likes-no">{song.relations.review}</span>
                </div>
                <div className="song-dislikes">
                  <AiFillDislike />
                  <span className="dislikes-name">{song.relations.like}</span>
                </div>
                <div className="runtime-wrap">
                  <FaRegClock />
                  <span className="runtime-no">
                    {secondsToMinutes(song.duration)}
                  </span>
                </div>
              </div>
              <div className="favourite col-1">
                <FaHeart />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TrendingSongs;

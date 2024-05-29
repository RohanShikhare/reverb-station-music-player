"use client";
import Image from "next/image";
import React from "react";
import {
  FaHeadphones,
  FaHeart,
  FaMusic,
  FaRegClock,
  FaUser,
} from "react-icons/fa";
import { useSelector } from "react-redux";

function TrendingSongs() {
  const { trendingSongs } = useSelector((store) => store.trending);
  return (
    <div className="ts-wrap">
      <div className="ts-topbar">
        <p className="ts-title">This Week's Top #20</p>
        <button className="ts-view-all">View All</button>
      </div>
      <div className="ts-list">
        <ul>
          {trendingSongs.map((song, index) => (
            <li key={index}>
              <div className="song-wrap">
                <span className="ts-number">#{index + 1}</span>
                <div className="song-info">
                  <div className="song-img-wrap">
                    <Image
                      src={song.imageUrl}
                      alt={song.title}
                      height={500}
                      width={500}
                    />
                  </div>
                  <div className="song-info-wrap">
                    <p className="song-title">{song.title}</p>
                    <p className="song-author">{song.artist}</p>
                  </div>
                </div>
              </div>
              <div className="artist-wrap">
                <FaUser />
                <span className="artist-name">{song.artist}</span>
              </div>
              <div className="streams-wrap">
                <FaHeadphones />
                <span className="streams-no">{song.streams}</span>
              </div>
              <div className="song-category">
                <FaMusic />
                <span className="category-name">{song.category}</span>
              </div>
              <div className="runtime-wrap">
                <FaRegClock />
                <span className="runtime-no">{song.runtime}</span>
              </div>
              <div className="favourite">
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

import Image from "next/image";
import React from "react";
import {
  FaHeadphones,
  FaHeart,
  FaMusic,
  FaRegClock,
  FaUser,
} from "react-icons/fa";

function TrendingSongs() {
  return (
    <div className="ts-wrap">
      <div className="ts-topbar">
        <p className="ts-title">This Week's Top #20</p>
        <button className="ts-view-all"  >View All</button>
      </div>
      <div className="ts-list">
        <ul>
          <li>
            <div className="song-wrap">
              <span className="ts-number">#1</span>
              <div className="song-info">
                <div className="song-img-wrap">
                  <Image src={""} alt="Song-name" height={500} width={500} />
                </div>
                <div className="song-info-wrap">
                  <p className="song-title">Song 1</p>
                  <p className="song-author">Aaron Carpentar</p>
                </div>
              </div>
            </div>
            <div className="artist-wrap">
              <FaUser />
              <span className="artist-name">Aaron Carpentar</span>
            </div>
            <div className="streams-wrap">
              <FaHeadphones />
              <span className="streams-no">12,23,343</span>
            </div>
            <div className="song-category">
              <FaMusic />
              <span className="category-name">Hip-Hop</span>
            </div>
            <div className="runtime-wrap">
              <FaRegClock />
              <span className="runtime-no">2:45</span>
            </div>
            <div className="favourite">
              <FaHeart />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TrendingSongs;

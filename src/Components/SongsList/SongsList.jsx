"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaHeart, FaRegClock, FaUser } from "react-icons/fa";
import { AiFillDislike } from "react-icons/ai";
import { MdCloudUpload, MdDownload } from "react-icons/md";
import { setActiveSong } from "@/Redux-Store/slices/ActiveSong";
import { useDispatch } from "react-redux";
import Link from "next/link";

function SongsList({ what, title, button }) {
  const [viewAll, setViewAll] = useState(false);
  const showAll = () => {
    setViewAll(!viewAll);
  };
  const dispatch = useDispatch();

  function secondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    let formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${minutes}:${formattedSeconds}`;
  }

  return (
    <div className="ls-wrap">
      <div className="ls-topbar">
        <p className="ls-title">{title}</p>
        <div className="topbar-btns">
          {button === "view-button" ? (
            <button className="ls-view-all" onClick={() => showAll()}>
              {viewAll ? "View Less" : "View All"}
            </button>
          ) : (
            <span></span>
          )}
        </div>
      </div>
      <div className="ls-list">
        <ul className={`${viewAll ? "view-all" : ""}`}>
          {what.map((song, index) => (
            <li key={index}>
              <div
                className="song-wrap col-4"
                onClick={() => {
                  dispatch(setActiveSong(song));
                }}
              >
                <span className="ls-number">#{index + 1}</span>
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
              <div className="artist-wrap col-3">
                <FaUser />
                <span className="artist-name">{song.artist_name}</span>
              </div>
              <div className="d-flex justify-content-around col-4">
                <div className="release-wrap">
                  <MdCloudUpload />
                  <span className="release-no">{song.releasedate}</span>
                </div>
                <div className="download-wrap">
                  <Link href={song.audiodownload}>
                    <MdDownload />

                    <span className="download-label">Download</span>
                  </Link>
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

export default SongsList;

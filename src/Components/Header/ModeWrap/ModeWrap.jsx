"use client";
import React from "react";
import { GiUbisoftSun } from "react-icons/gi";
import { BsMoonStarsFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { ModeAction } from "../../../Redux-Store/actions/ModeActions";


function ModeWrap() {
  const { selectedMode } = useSelector((store) => store.mode);
  const { setMode } = ModeAction();
  return (
    <div className="mode-wrap">
      <div
        className={`day-mode ${selectedMode === "day" ? "active" : ""}`}
        onClick={() => setMode("day")}
      >
        <GiUbisoftSun />
      </div>
      <div
        className={`night-mode ${selectedMode === "night" ? "active" : ""}`}
        onClick={() => setMode("night")}
      >
        <BsMoonStarsFill />
      </div>
      <div className={`color-slider ${selectedMode === "night" ? "night-mode" : "day-mode"}`} ></div>
    </div>
  );
}

export default ModeWrap;

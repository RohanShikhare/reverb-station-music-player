"use client";
import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaFireAlt, FaRegHeart } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { GiMusicalScore } from "react-icons/gi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoCloudOfflineOutline } from "react-icons/io5";
import { MdOutlineQueueMusic } from "react-icons/md";
import { SideBarAction } from "../../Redux-Store/actions/SideBarAction";
import { useSelector } from "react-redux";
function Sidebar() {
  const { ToggleSidebar } = SideBarAction();
  const {isSidebarOpen} = useSelector((store)=>store.sidebar);
  return (
    <nav className={`col-lg-2 ${isSidebarOpen === false ? "closed" : "" }`}>
      <ul>
        <li onClick={() => ToggleSidebar()}>
          <CgMenuGridR /> <span>Main Menu</span> <div className="sideTooltip">Main Menu</div>
        </li>
        <li>
          <FaFireAlt /> <span>Trending</span> <div className="sideTooltip">Trending</div>
        </li>
        <li>
          <BiCategoryAlt /> <span>Genres</span> <div className="sideTooltip">Genres</div>
        </li>
        <li>
          <GiMusicalScore /> <span>Artists</span> <div className="sideTooltip">Artists</div>
        </li>
        <li>
          <FaRegHeart /> <span>Favourites</span> <div className="sideTooltip">Favourites</div>
        </li>
        <li>
          <FaClockRotateLeft /> <span>Recently Played</span> <div className="sideTooltip">Recently Played</div>
        </li>
        <li>
          <MdOutlineQueueMusic /> <span>Queue</span> <div className="sideTooltip">Queue</div>
        </li>
        <li>
            <IoCloudOfflineOutline /> <span>Offline Music</span> <div className="sideTooltip">Offline Music</div>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;

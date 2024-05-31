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
import Link from "next/link";
function Sidebar() {
  const { ToggleSidebar } = SideBarAction();
  const { isSidebarOpen } = useSelector((store) => store.sidebar);
  return (
    <nav className={`col-lg-2 ${isSidebarOpen === false ? "closed" : ""}`}>
      <ul>
        <li onClick={() => ToggleSidebar()} className="menu">
          <CgMenuGridR /> <span>Main Menu</span>{" "}
          <div className="sideTooltip">Main Menu</div>
        </li>
        <li className="active">
          <Link href="/">
            <FaFireAlt /> <span>Discover</span>{" "}
            <div className="sideTooltip">Discover</div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <BiCategoryAlt /> <span>Genres</span>{" "}
            <div className="sideTooltip">Genres</div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <GiMusicalScore /> <span>Artists</span>{" "}
            <div className="sideTooltip">Artists</div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <FaRegHeart /> <span>Favourites</span>{" "}
            <div className="sideTooltip">Favourites</div>
          </Link>
        </li>
        <li>
          <Link href="/recentlyPlayed">
            <FaClockRotateLeft /> <span>Recently Played</span>{" "}
            <div className="sideTooltip">Recently Played</div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <MdOutlineQueueMusic /> <span>Queue</span>{" "}
            <div className="sideTooltip">Queue</div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <IoCloudOfflineOutline /> <span>Offline Music</span>{" "}
            <div className="sideTooltip">Offline Music</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;

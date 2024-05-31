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
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: <FaFireAlt />, label: "Discover", href: "/" },
  { icon: <BiCategoryAlt />, label: "Genres", href: "/" },
  { icon: <GiMusicalScore />, label: "Artists", href: "/" },
  { icon: <FaRegHeart />, label: "Favourites", href: "/" },
  { icon: <FaClockRotateLeft />, label: "Recently Played", href: "/recentlyPlayed" },
  { icon: <MdOutlineQueueMusic />, label: "Queue", href: "/" },
  { icon: <IoCloudOfflineOutline />, label: "Offline Music", href: "/" },
];

function Sidebar() {
  const { ToggleSidebar } = SideBarAction();
  const { isSidebarOpen } = useSelector((store) => store.sidebar);
  const pathname = usePathname();

  return (
    <nav className={`col-lg-2 ${isSidebarOpen === false ? "closed" : ""}`}>
      <ul>
        <li onClick={() => ToggleSidebar()} className="menu">
          <CgMenuGridR /> <span>Main Menu</span>
          <div className="sideTooltip">Main Menu</div>
        </li>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={pathname === item.href ? "active" : ""}
          >
            <Link href={item.href}>
              {item.icon} <span>{item.label}</span>
              <div className="sideTooltip">{item.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;

import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../Assets/img/logo.png";
import Image from 'next/image';
import ModeWrap from './ModeWrap/ModeWrap';

function Header() {
  return (
    <header>
        <div className="title-wrap">
            <Image height={30} width={30} src={logo} alt="ReverbStation_Logo" />
            <h1>ReverbStation - The Ultimate Player</h1>
        </div>
        <div className="last-block">
            <div className="search-wrap">
                <span className='search-logo'>
                    <IoSearchSharp />
                </span>
                <input type="text" />
            </div>
            <ModeWrap/>
        </div>
    </header>
  )
}

export default Header
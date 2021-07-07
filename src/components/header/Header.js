import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

function Header() {
  return (
    <div className="header border border-dark">
      <FaBars className="header__menu" size={26} />
      <img
        src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt="Youtube"
        className="header__logo"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg"
          alt="Profile"
        ></img>
      </div>
    </div>
  );
}

export default Header;

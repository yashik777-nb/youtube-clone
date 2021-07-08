import React from "react";
import "./_sidebar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";

import { useDispatch } from "react-redux";

import * as actionCreatorsIndex from "../../redux/actionCreatorsIndex";

function Sidebar({ sidebar, handleToggleSidebar }) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(actionCreatorsIndex.logout());
  };
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I dont Know</span>
      </li>
      <hr />
      <li onClick={() => logoutHandler()}>
        <MdExitToApp size={23} />
        <span>Logout</span>
      </li>
      <hr />
    </nav>
  );
}

export default Sidebar;

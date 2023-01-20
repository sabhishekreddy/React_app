import React from "react";
import "./Header.css";

import { NavLink } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function Header() {
  return (
    <div id="main-header">
      <div id="left">
        <span>amazon</span>
      </div>

      <div id="right">
        <div id="navigations">
          <NavLink to="store">Store</NavLink>
          <NavLink to="nearby">Nearby</NavLink>
          <NavLink to="trends">Trends</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>

        <div className="combination">
          <input type="text" placeholder="Search" />
          <LocalMallOutlinedIcon />
          <DashboardIcon />
        </div>
      </div>
    </div>
  );
}
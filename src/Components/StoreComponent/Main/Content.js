import React from "react";
import "./Content.css";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import Products from "./Products";

export default function Content() {
  return (
    <div id="ContentMain">
      <div id="container-1">
        <h1>Store Name</h1>
        <h3 id="store-description">
          High Quality products are avaliable here wait for your look around
        </h3>
        <div id="search-box">
          <div id="dropdown">
            All
            <KeyboardArrowDownRoundedIcon />
          </div>
          <input type="text" placeholder="Search" id="searchinp" />
          <SearchRoundedIcon />
        </div>
      </div>
      <Products />
    </div>
  );
}

/*
<div id="store-contact-details">
          <div>
            <MarkunreadRoundedIcon />
            abhishekreddy77373@gmail.com
          </div>
          <div>
            <LocalPhoneRoundedIcon />
            8688417075
          </div>
        </div>
*/
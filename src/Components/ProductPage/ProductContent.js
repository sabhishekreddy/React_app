import React from "react";
import "./ProductContent.css";

import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import coke from "../../Assets/coke.png";
import { motion } from "framer-motion";

export default function () {
  return (
    <div id="product-grid-custom">
      <div id="left-grid-custom">
        <div>
          <h1>Product Name Description</h1>
          <h6>Product TagLine</h6>
          <h5>Cost</h5>
        </div>
        <div id="count-box">
          <span>Choose</span>
          <div>
            <KeyboardArrowUpRoundedIcon />
            <h6>0</h6>
            <KeyboardArrowDownRoundedIcon />
          </div>
        </div>
        <div id="buynow-box">
          <LocalMallRoundedIcon />
          <h3>Buy Now</h3>
        </div>
      </div>
      <div id="center-grid"
       layoutId="product-glimpse-1">
        <motion.img src={coke} alt="product" key="unique-2" layoutId="layout-id-1"/>
      </div>
      <div id="right-grid">
        <img src={coke} alt="product" />
        <img src={coke} alt="product" />
        <img src={coke} alt="product" />
      </div>
    </div>
  );
}

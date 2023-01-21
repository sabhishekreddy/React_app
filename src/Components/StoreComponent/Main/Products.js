import React from "react";
import "./Products.css";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import TurnedInRoundedIcon from "@mui/icons-material/TurnedInRounded";
import { useNavigate } from "react-router";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import coke from "../../../Assets/coke.png";

export default function Products() {
  return (
    <motion.div id="products-container"
    >
      <div id="product-selector">
        <div id="filters">
          <span id="active">Latest</span>
          <span>Popular</span>
        </div>
        <div>
          <FilterListRoundedIcon />
          <TurnedInRoundedIcon />
        </div>
      </div>
      <div id="product-grid">
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </div>
    </motion.div>
  );
}

function ProductComponent() {
  const navigation = useNavigate();
  return (
    <motion.div
      className="product-glimpse"
      layoutId="product-glimpse-1"
      onClick={() => {
        navigation("1");
      }}
    >
      <motion.img
      initial={{scale: 1}}
      src={coke} alt="product" layoutId="layout-id-1" />
      <div className="details">
        <div className="sub-details-1">
          <h1>Coke Tin</h1>
          <h3>Sugar Free diety delicious coke</h3>
        </div>
        <div className="sub-details-2">
          <h1>1000+ Ratings</h1>
          <h4>Explore</h4>
        </div>
      </div>
    </motion.div>
  );
}

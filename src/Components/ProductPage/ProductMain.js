import React from "react";
import Header from "../GettingStarted/Header/Header";
import ProductContent from "./ProductContent";
import "./ProductMain.css";
import { AnimatePresence, motion } from "framer-motion";

export default function ProductMain() {
  const main_variant = {
    initial: {
      scale: 0.6,
    },
    animate: {
      scale: 1,
    },
    exit: {
      scale: 0.8,
    },
  };

  return (
    <motion.div
      id="product-page"
      variants={main_variant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <Header />
      <div id="gap-container"></div>
      <ProductContent />
    </motion.div>
  );
}

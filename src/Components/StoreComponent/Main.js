import React from "react";
import "./Main.css";
import Content from "./Main/Content";
import StoreHeader from "./Main/StoreHeader";
import { AnimatePresence, motion } from "framer-motion";
import { Opacity } from "@mui/icons-material";

const main_variant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default function Main() {
  return (
    <AnimatePresence>
      <motion.div
        id="MainContainer"
        variants={main_variant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <StoreHeader />
        <Content />
      </motion.div>
    </AnimatePresence>
  );
}

import React from "react";
import { useState, useEffect } from "react";
import "./Recovery.css";

import { motion } from "framer-motion";

function Recovery() {
  const [Email, SetEmail] = useState("");
  const [isLoggedIn, SetisLoggedIn] = useState(false);
  const [clicked, SetClicked] = useState(false);

  useEffect(() => {
    console.log("reloaded");
  }, [isLoggedIn]);

  const variant = {
    open: {
      opacity: 0,
      x: -300,
    },
    animate: {
      opacity: 1,
      x: 0,
      padding: clicked == true ? "0" : "1.5rem",
      width: clicked === true ? "33rem" : "30rem",
      height: clicked === true ? "13rem" : "10rem",
    },
    exit: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <motion.div
      className="RecoveryContainer"
      initial="open"
      animate="animate"
      exit="exit"
      variants={variant}
      transition={{
        duration: 2,
        type: "spring",
        delay: 0.5,
      }}
    >
      <motion.div className="RecoveryTopBar">
        <motion.div
          id="dot"
          onClick={() => {
            SetClicked(!clicked);
          }}
          animate={{
            width: clicked === true ? "33rem" : "2rem",
            height: clicked === true ? "13rem" : "2rem",
            borderRadius: clicked === true ? "15px" : "100%",
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <motion.h1
            id="hiddentitle"
            animate={{
              display: clicked === true ? "block" : "none",
            }}
          >
            Recover
          </motion.h1>
        </motion.div>
      </motion.div>
      <motion.div
        id="RecoveryContentBar"
        animate={{
          display: clicked === true ? "none" : "block",
        }}
        transition={{
          duration: 1,
        }}
      >
        <div id="Recoverytitle">
          <h1>Recover</h1>
        </div>
        <div id="Recoverycreateform">
          <input
            placeholder="Email Address"
            value={Email}
            onChange={(e) => {
              SetEmail(e.target.value);
            }}
          />
          <button type="submit">Send</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Recovery;

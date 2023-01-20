import React from "react";
import { useState, useEffect } from "react";
import "./SignUp.css";

import { motion } from "framer-motion";
import { CreateAccount } from "../../../firebase/functions/authentication";

export default function SignUp() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [confirmPassword, SetconfirmPassword] = useState("");
  const [isLoggedIn, SetisLoggedIn] = useState(false);
  const [clicked, SetClicked] = useState(true);
  const [checkList, SetcheckList] = useState({
    normal: false,
    "non-special": false,
    "white-space": false,
    compare: false,
  });

  const variant = {
    open: {
      opacity: 0,
      y: 500,
    },
    animate: {
      opacity: 1,
      y: 0,
      padding: clicked == true ? "0" : "1rem 1.5rem",
      width: clicked === true ? "25rem" : "23rem",
      height: clicked === true ? "33rem" : "30rem",
    },
    exit: {
      opacity: 0,
      y: -300,
    },
  };

  useEffect(() => {
    //SetClicked(!clicked)
    setTimeout(() => {
      SetClicked(false);
    }, 1500);
  },[]);

  return (
    <motion.div
      className="SignUpContainer"
      initial="open"
      animate="animate"
      exit="exit"
      variants={variant}
      transition={{
        duration: 1,
        type: "spring",
        delay: 0.5,
      }}
    >
      <div className="SignUpTopBar">
        <motion.div
          onClick={() => {
            SetClicked(!clicked);
          }}
          animate={{
            width: clicked === true ? "25rem" : "2rem",
            height: clicked === true ? "33rem" : "2rem",
            borderRadius: clicked === true ? "15px" : "100%",
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <motion.h1
            id="signuphiddentitle"
            animate={{
              display: clicked === true ? "block" : "none",
            }}
          >
            Sign In
          </motion.h1>
        </motion.div>
      </div>
      <motion.div
      id="SignUpContentBar"
        animate={{
          display: clicked === true ? "none" : "flex",
        }}
        transition={{
          duration: 1,
        }}
      >
        <div id="SignUptitle">
          <h1>Sign Up</h1>
          <h5>
            Create an account and start exploring best seller nearby with great
            offers !!..
          </h5>
        </div>
        <div id="SignUpcreateform">
          <input
            placeholder="Email Address"
            onChange={(e) => {
              SetEmail(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            onChange={(e) => {
              SetPassword(e.target.value);
            }}
          />
          <input
            placeholder="Confirm Password"
            onChange={(e) => {
              handleConfirmPassword(e);
            }}
          />
          <div id="SignUpindicators">{create_alarms()}</div>
          <button
            type="submit"
            onClick={(e) => {
              handleAuthentication();
            }}
          >
            {isLoggedIn ? "Get Started" : "Sign Up"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );

  function create_alarms() {
    const arr = [];
    for (const i in checkList) {
      arr.push(
        checkList[i] === false ? (
          <div key={i} className="SignUpwrong"></div>
        ) : (
          <div key={i} className="SignUpright"></div>
        )
      );
    }
    return arr;
  }

  async function handleAuthentication() {
    try {
      const User = await CreateAccount(Email, Password);
      if (User !== null && User !== {}) {
        SetisLoggedIn(true);
      }
    } catch (error) {
      SetisLoggedIn(false);
    }
  }

  function handleConfirmPassword(e) {
    SetconfirmPassword(e.target.value);
    PasswordStrengthGenerator();
  }

  function PasswordStrengthGenerator() {
    const normalCharacters = /[a-zA-Z0-9\!\@\#\$\%\^\&\*]/g;
    const nonspecialCharacter = /[\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
    const whitespaceCharacter = /\s/g;

    const CheckListcopy = {
      normal: normalCharacters.test(Password),
      "non-special": nonspecialCharacter.test(Password),
      "white-space": whitespaceCharacter.test(Password),
      compare: Password === confirmPassword,
    };

    SetcheckList(CheckListcopy);
    console.log("remove comments in function");
  }
}

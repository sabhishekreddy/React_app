import React from "react";
import { useState, useEffect } from "react";
import "./SignIn.css";

import { animate, motion } from "framer-motion";

import { SignInEmailAndPassword } from "../../../firebase/functions/authentication";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function SignIn() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [isLoggedIn, SetisLoggedIn] = useState(false);
  const [clicked, SetClicked] = useState(true);
  const navigation = useNavigate();

  const user = useSelector((state) => state);
  //console.log(user);
  //setTimeout(()=>{ SetClicked(!clicked)},1000)

  useEffect(()=>{
    console.log("reload")
  },[])

  const dispatch = useDispatch();

  const variant = {
    open: {
      opacity: 0,
      y: -300,
    },
    animate: {
      opacity: 1,
      y: 0,
      padding: clicked==true?"0":"2rem",
      width: clicked === true ? "24rem" : "20rem",
      height: clicked === true ? "24rem" : "20rem",
    },
    exit: {
      opacity: 0,
      y: 100,
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
      className="SignInContainer"
      initial="open"
      animate="animate"
      exit="exit"
      variants={variant}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      }}
    >
      <div className="SignInTopBar">
        <motion.div
          onClick={() => {
            SetClicked(!clicked);
          }}
          animate={{
            width: clicked === true ? "24rem" : "2rem",
            height: clicked === true ? "24rem" : "2rem",
            borderRadius: clicked===true ? "15px" : "100%",
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <motion.h1 id="signinhiddentitle"
          animate={{
            display: clicked===true ? "block" : "none",
          }}
          >
            Sign In
          </motion.h1>
        </motion.div>
      </div>
      <motion.div
        animate={{
          display: clicked === true ? "none" : "block",
        }}
        transition={{
          duration: 1,
        }}
      >
        <div id="SignIntitle">
          <h1>Sign In</h1>
        </div>
        <div id="SignIncreateform">
          <input
            placeholder="Email Address"
            value={Email}
            onChange={(e) => {
              SetEmail(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            value={Password}
            onChange={(e) => {
              SetPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              handleAuthentication();
            }}
          >
            {isLoggedIn ? "Get Started" : "Sign In"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );

  async function handleAuthentication() {
    try {
      const User = await SignInEmailAndPassword(Email, Password);
      if (User !== null && User !== {}) {
        SetisLoggedIn(true);
        console.log(User.user.email);
        dispatch({ type: "AddUser", payload: { user: User.user.email } });
        navigation("/")
      }
    } catch (error) {
      SetisLoggedIn(false);
    }
  }
}

export default SignIn;

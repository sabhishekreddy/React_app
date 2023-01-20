import React, { useEffect, useState } from "react";
import "./Grid2.css";
import delivery from "../../../Assets/delivery.svg";
import search from "../../../Assets/Search.svg";
import order_confirmed from "../../../Assets/order_confirmed.svg";
import relax from "../../../Assets/relax.svg";
import hungry from "../../../Assets/hungry.svg";
import order1 from "../../../Assets/order1.svg";
import delivered from "../../../Assets/delivered.svg";
import { motion, AnimatePresence } from "framer-motion";

const arr = [hungry, search, order_confirmed, relax, order1, delivery, delivered ];

export default function Grid2() {
  const [index, SetIndex] = useState(0);

  useEffect(()=>{
    console.log("rendered")
  })

  return (
    <motion.div
      id="gs-grid2-main"
      onHoverStart={() => {
        if (index === arr.length - 1) {
          SetIndex(0);
        } else {
          SetIndex(index + 1);
        }
      }}
    >
      <AnimatePresence>
      {arr
        .filter((item, i) => index === i)
        .map((item1, i1) => (
          <motion.img
            key={i1}
            src={item1}
            alt="svg"
            exit={{scale:0}}
            transition={{ duration: 0.5, ease:"easeInOut" }}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

/*
{arr.map((item, i) => (
          <motion.img
            src={item}
            alt="svg"
            key={i}
            animate={{
              //display: i == index ? "block" : "none",
              opacity: i == index ? "1" : "0",
            }}
            transition={{ duration: 10 }}
          />
        ))}



        if (index == arr.length - 1) {
      SetIndex(0);
    } else {
      SetIndex(index + 1);
    }
*/

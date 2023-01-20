import React from 'react'
import "./Main.css"
import Content from './Main/Content'
import StoreHeader from './Main/StoreHeader'
import {motion} from "framer-motion"
import { Opacity } from '@mui/icons-material'

const main_variant = {
  initial:{
    scale: 1.5,
    opacity: 0,
  },
  animate:{
    scale: 1,
    opacity: 1
  },
  exit:{
    scale: .9,
    opacity: 0,
  }
}

export default function Main() {
  return (
    <motion.div id='MainContainer'
    variants={main_variant}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{
      duration: 1,
      ease: "easeInOut"
    }}
    >
            <StoreHeader />
            <Content />
    </motion.div>
  )
}

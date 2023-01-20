import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./GettingStarted.css";
import Grid1 from "./GridComponents/Grid1";
import Grid2 from "./GridComponents/Grid2";

import Header from "./Header/Header";
import { useNavigate } from "react-router";

export default function GettingStarted() {

    const user = useSelector(state=>state.user)
    const navigate = useNavigate();
    useEffect(()=>{
        if(user === null){
            navigate('/auth')
        }else{
            console.log("hello")
            console.log(user)
        }
    })

    return (
        <div id="gs-main">
            <Header />
            <div id="gs-content-main-grid">
                <Grid1 />
                <Grid2 />
            </div>
        </div>
    );
}

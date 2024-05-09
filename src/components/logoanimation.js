"use client"
import React, { useRef } from "react";
import Lottie from "lottie-react";
import LogoAnimationFile from "../app/knotbintext.json"
import Style from "../app/page.module.css"

export default function LogoAnimation() {
    return (
        <Lottie className={Style.titleicon} loop={false} animationData={LogoAnimationFile}></Lottie>
    )
}
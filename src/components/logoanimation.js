"use client"
import React, { useRef } from "react";
import Lottie from "lottie-react";
import LogoAnimationFile from "../app/knotbintext.json"

export default function LogoAnimation() {
    return (
        <Lottie loop={false} animationData={LogoAnimationFile}></Lottie>
    )
}
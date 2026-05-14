"use client"

import { useEffect, useState } from "react";

export default function Emoticons({children, faceIndex}: {children: React.ReactNode}) {

    const emoticons = ["TT","TAT",":)"];
    const [currentEmo, setCurrentEmo] = useState(0);
    const face = ["O_O", "-_-"];
    const [currentFace, setCurrentFace] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log("10s");
        }, 10000);

        setInterval(() => {
            if(currentFace % 5 == 0){
                setCurrentFace(1);
            }else{
                setCurrentFace(0);
            }
            setCounter(counter + 1);

        }, 1000);
    }, []);


  return (
    <>
        {children}
        {currentFace}
    </>
  );
}
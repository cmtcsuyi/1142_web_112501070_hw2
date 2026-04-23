"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

  const [counter, setCounter] = useState(0);


  function nextProblem(){
    console.log("被點到了");
    setCounter(counter+1);
  }

  useEffect(function(){
    console.log("畫面載入完成");
  }, []);

  useEffect(function(){
    console.log("有人說早安");
  }, [counter]);

  return (
    <>
      {
        (counter == 0) && <div className="w-[480px] h-screen flex justify-center items-center flex-col bg-red-500 m-auto">
          <div>歡迎畫面</div>
          <div onClick={nextProblem} className="bg-black px-6 py-3">開始測驗</div>
        </div>
      }

      {
        (counter == 1) && <div className="w-[480px] h-screen flex justify-center items-center flex-col bg-red-500 m-auto">
          <div>題目一</div>
          <div onClick={nextProblem} className="bg-black px-6 py-3">下一題</div>
        </div>
      }

      {
        (counter == 2) && <div className="w-[480px] h-screen flex justify-center items-center flex-col bg-red-500 m-auto">
          <div>題目二</div>
          <div onClick={nextProblem} className="bg-black px-6 py-3">下一題</div>
        </div>
      }
    </>
  );
}
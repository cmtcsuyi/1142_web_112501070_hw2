"use client"

import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import { useState, useEffect } from "react";
import { usePsyStore } from "@/store/store";

export default function Result() {

  const router = useRouter();
  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);
  const [psyResult, setPsyResult] = useState(<></>);

  useEffect(() => {
    getResult();
  }, [psyData.score]);

  function getResult(){
    if(psyData.score < 3){
      setPsyResult(<div>result A</div>);
    }else if(psyData.score >= 3 && psyData < 7){
      setPsyResult(<div>result B</div>);
    } else {
      setPsyResult(<div>result C</div>);
    }
  }

  function playAgain(){
    setPsyScore(0);
    router.push("/");
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        結果，目前積分 : {psyData.score}

        {psyResult}

        <div className="text-white bg-black px-3 py-2" onClick={playAgain}>再玩一次</div>
      </div>
    </>
  );
}
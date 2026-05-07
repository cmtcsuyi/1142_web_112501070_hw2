"use client"

import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import { useState, useEffect } from "react";
import { usePsyStore } from "../../store/store";

export default function Question() {

  const router = useRouter();
  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);
  const [questionIndex, setQuestionIndex] = useState(0);


  useEffect(() => {
    console.log("目前分數:" + psyData.score);
  }, [psyData.score] );

  
  function nextQuestion(optionIndex: any){
    console.log("使用者選擇:" + optionIndex);

    setPsyScore( psyData.score + psyData.quizData[questionIndex].options[optionIndex].value);
    console.log( psyData.score );

    if(questionIndex != psyData.quizData.length-1){
      console.log("下一題");
      setQuestionIndex( questionIndex + 1 );
    }else{
      console.log("進入準備");
      router.push("/prepare");
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        答題

        <div>
          <div>{("Q"+ (questionIndex+1) + ".") + psyData.quizData[questionIndex].title }</div>
          <div onClick={ ()=>nextQuestion(0) }>{ psyData.quizData[questionIndex].options[0].text }</div>
          <div onClick={ ()=>nextQuestion(1) }>{ psyData.quizData[questionIndex].options[1].text }</div>
          <div onClick={ ()=>nextQuestion(2) }>{ psyData.quizData[questionIndex].options[2].text }</div>
        </div>

        {/* <Link className="text-white bg-black px-3 py-2" href="/prepare">準備</Link> */}
      </div>
    </>
  );
}
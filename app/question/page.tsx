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
        答題階段

        <div>
          <div className="mt-10 mb-10">{("Q"+ (questionIndex+1) + ". ") + psyData.quizData[questionIndex].title }</div>

          {
            psyData.quizData[questionIndex].options.map( (option: any, index: number) => {
              // return <div onClick={ ()=>nextQuestion(index) }>{ option.text }</div>
              return (
                <div
                  key={index}
                  onClick={() => nextQuestion(index)}
                  className="
                    w-full
                    max-w-md
                    px-5 py-4
                    mb-10
                    rounded-xl
                    bg-[#f0e8dc]/50
                    backdrop-blur-md
                    border border-white/40
                    text-[#2f3a36]
                    shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                    cursor-pointer
                    transition-all duration-300
                    hover:scale-[1.02]
                    hover:bg-white/80
                    hover:shadow-[0_10px_30px_rgba(120,120,255,0.25)]
                    active:scale-[0.98]
                  "
                >
                  <div className="flex flex-col items-center w-full"> {option.text} </div>
                </div>
              );
            })
          }
          <div className="flex justify-center items-center text-sm text-gray-500 mt-15">
            Q{questionIndex + 1} / {psyData.quizData.length}
          </div>

        </div>
      </div>
    </>
  );
}